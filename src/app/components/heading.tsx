import supabase from "../../../supabase";

export default async function Heading({ int }: { int: number }) {
    const { data } = await supabase.from('title').select('heading').eq('id', int).single();
    
    return (
        <div className="w-full text-black text-sm  py-2 px-2">
            
            <span className="text-red-600">&gt;</span>
            &nbsp;
            <span className="text-red-600">&gt;</span>
            &nbsp;
            {data?.heading || 'Raw Halal Chicken'}
        </div>
    );
}