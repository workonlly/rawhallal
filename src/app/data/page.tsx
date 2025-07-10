'use client';
import supabase from '../../../supabase';

const SUPABASE_URL = 'https://akqmahrvurcswatrffln.supabase.co';

// Add type for Supabase storage items

type SupabaseStorageItem = {
  id: string;
  name: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string | null;
  metadata: object | null;
};

export async function fresh() {
  const bucket = 'fresh';
  const folderMap: Record<string, string[]> = {};

  // List all items in the root of the bucket (should be folders)
  const { data: items, error: listError } = await supabase
    .storage
    .from('fresh')
    .list('', { limit: 100 });

  if (listError) throw new Error(listError.message);
  if (!items || items.length === 0) throw new Error('No folders found in bucket.');

  // For each folder, list its files (images)
  for (const folder of (items as SupabaseStorageItem[]).filter((item: SupabaseStorageItem) => item.metadata === null)) {
    const { data: files, error: folderError } = await supabase
      .storage
      .from(bucket)
      .list(folder.name);

    if (folderError || !files) continue;

    folderMap[folder.name] = files
      .filter((file: { name: string }) =>
        file.name &&
        !file.name.startsWith('.') &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: { name: string }) =>
        `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder.name}/${file.name}`
      );
  }

  return folderMap
  ;
}
export async function mutton() {
  const bucket = 'mutton';
  const folderMap: Record<string, string[]> = {};

  // List all items in the root of the bucket (should be folders)
  const { data: items, error: listError } = await supabase
    .storage
    .from('fresh')
    .list('', { limit: 100 });

  if (listError) throw new Error(listError.message);
  if (!items || items.length === 0) throw new Error('No folders found in bucket.');

  // For each folder, list its files (images)
  for (const folder of (items as SupabaseStorageItem[]).filter((item: SupabaseStorageItem) => item.metadata === null)) {
    const { data: files, error: folderError } = await supabase
      .storage
      .from(bucket)
      .list(folder.name);

    if (folderError || !files) continue;

    folderMap[folder.name] = files
      .filter((file: { name: string }) =>
        file.name &&
        !file.name.startsWith('.') &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: { name: string }) =>
        `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder.name}/${file.name}`
      );
  }

  return folderMap
  ;
}
export async function chicken() {
  const bucket = 'chicken';
  const folderMap: Record<string, string[]> = {};

  // List all items in the root of the bucket (should be folders)
  const { data: items, error: listError } = await supabase
    .storage
    .from('fresh')
    .list('', { limit: 100 });

  if (listError) throw new Error(listError.message);
  if (!items || items.length === 0) throw new Error('No folders found in bucket.');

  // For each folder, list its files (images)
  for (const folder of (items as SupabaseStorageItem[]).filter((item: SupabaseStorageItem) => item.metadata === null)) {
    const { data: files, error: folderError } = await supabase
      .storage
      .from(bucket)
      .list(folder.name);

    if (folderError || !files) continue;

    folderMap[folder.name] = files
      .filter((file: { name: string }) =>
        file.name &&
        !file.name.startsWith('.') &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: { name: string }) =>
        `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder.name}/${file.name}`
      );
  }

  return folderMap
  ;
}
export async function fish() {
  const bucket = 'fish';
  const folderMap: Record<string, string[]> = {};

  // List all items in the root of the bucket (should be folders)
  const { data: items, error: listError } = await supabase
    .storage
    .from('fresh')
    .list('', { limit: 100 });

  if (listError) throw new Error(listError.message);
  if (!items || items.length === 0) throw new Error('No folders found in bucket.');

  // For each folder, list its files (images)
  for (const folder of (items as SupabaseStorageItem[]).filter((item: SupabaseStorageItem) => item.metadata === null)) {
    const { data: files, error: folderError } = await supabase
      .storage
      .from(bucket)
      .list(folder.name);

    if (folderError || !files) continue;

    folderMap[folder.name] = files
      .filter((file: { name: string }) =>
        file.name &&
        !file.name.startsWith('.') &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: { name: string }) =>
        `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder.name}/${file.name}`
      );
  }

  return folderMap
  ;
}
export async function bhiryani() {
  const bucket = 'bhiryani';
  const folderMap: Record<string, string[]> = {};

  // List all items in the root of the bucket (should be folders)
  const { data: items, error: listError } = await supabase
    .storage
    .from('fresh')
    .list('', { limit: 100 });

  if (listError) throw new Error(listError.message);
  if (!items || items.length === 0) throw new Error('No folders found in bucket.');

  // For each folder, list its files (images)
  for (const folder of (items as SupabaseStorageItem[]).filter((item: SupabaseStorageItem) => item.metadata === null)) {
    const { data: files, error: folderError } = await supabase
      .storage
      .from(bucket)
      .list(folder.name);

    if (folderError || !files) continue;

    folderMap[folder.name] = files
      .filter((file: { name: string }) =>
        file.name &&
        !file.name.startsWith('.') &&
        /\.(jpg|jpeg|png|gif|webp)$/i.test(file.name)
      )
      .map((file: { name: string }) =>
        `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${folder.name}/${file.name}`
      );
  }

  return folderMap
  ;
}
