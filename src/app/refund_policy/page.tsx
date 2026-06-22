import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
        
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-10 text-center sm:px-10">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            Return & Refund Policy
          </h1>
          <p className="mt-3 text-lg font-medium text-red-100">
            Raw Halal Chicken
          </p>
          <p className="mt-1 text-sm text-red-200">
            Last Updated: June 2026
          </p>
        </div>

        <div className="px-6 py-8 sm:p-10 space-y-10">
          
          {/* Introduction */}
          <section className="prose max-w-none text-gray-600 text-lg leading-relaxed">
            <p>
              At <strong className="text-gray-900">Raw Halal Chicken (rawhalalchicken.com)</strong>, we are committed to delivering the freshest, highest quality, and 100% hygienic halal meat straight to your doorstep in Noida. Since meat is a fresh and perishable food item, we follow a strict and transparent return policy to ensure complete customer satisfaction.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4 pb-2 border-b border-gray-100">
              <span className="mr-3 text-2xl" role="img" aria-label="Search">🔍</span> 
              1. "Check Before You Accept" Policy (Our Guarantee)
            </h2>
            <div className="pl-1 sm:pl-9 space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>We strongly encourage all our customers to inspect the quality, freshness, and weight of the chicken/mutton at the exact time of delivery <strong>before accepting the order</strong> from our delivery executive.</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
                <li>If you are unhappy with the freshness, cut, or quality, you can return the package <strong className="text-gray-900">instantly</strong> to the delivery rider without any questions asked.</li>
                <li>For Cash on Delivery (COD) orders, you do not need to pay for the returned item.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4 pb-2 border-b border-gray-100">
              <span className="mr-3 text-2xl" role="img" aria-label="Prohibited">🚫</span> 
              2. Conditions Where Returns Are NOT Accepted
            </h2>
            <div className="pl-1 sm:pl-9 space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>Once the delivery is accepted by you (or your representative) and the delivery executive leaves your premises, we cannot accept returns or exchanges. We do not accept returns in the following cases:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
                <li>Change of mind after delivery (e.g., you decided you no longer want to cook meat today).</li>
                <li>Items stored improperly after delivery leading to spoilage.</li>
                <li>Packages that have been partially cooked, seasoned, or modified.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4 pb-2 border-b border-gray-100">
              <span className="mr-3 text-2xl" role="img" aria-label="Shield">🛡️</span> 
              3. Exceptional Quality Issues & Missing Items
            </h2>
            <div className="pl-1 sm:pl-9 space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>In very rare circumstances, if you notice an issue after the delivery executive has left (such as a wrong item delivered or a weight mismatch), please notify us <strong className="text-red-600">within 2 hours</strong> of receiving the order.</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
                <li><strong className="text-gray-900">How to report:</strong> Contact our customer support team immediately via our official channels.</li>
                <li><strong className="text-gray-900">Requirement:</strong> You must share clear photos/videos of the raw product and the digital invoice/bill weight tag.</li>
              </ul>
              <p className="bg-red-50 text-red-800 p-4 rounded-lg text-sm sm:text-base border border-red-100 mt-4">
                If your complaint is genuine, we will immediately arrange for a <strong>free replacement</strong> or process a <strong>full refund</strong>.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4 pb-2 border-b border-gray-100">
              <span className="mr-3 text-2xl" role="img" aria-label="Money Bag">💰</span> 
              4. Refund Process (For Prepaid Orders)
            </h2>
            <div className="pl-1 sm:pl-9 space-y-4 text-gray-600 text-base sm:text-lg leading-relaxed">
              <p>If you cancel a prepaid order before it is dispatched, or if an instant return is approved by our team:</p>
              <ul className="list-disc pl-5 space-y-2 marker:text-red-500">
                <li><strong className="text-gray-900">UPI / Online Payments:</strong> The refund will be credited back to your original payment source (GPay, PhonePe, Paytm, Credit/Debit Card) within 2 to 3 business days, depending on your bank's processing time.</li>
                <li><strong className="text-gray-900">Wallet / Store Credit:</strong> Alternatively, we can issue an instant credit to your Raw Halal Chicken account wallet for your next order.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Contact */}
          <section className="bg-gray-50 rounded-2xl p-6 sm:p-8 border border-gray-200 mt-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center mb-4">
              <span className="mr-3 text-2xl" role="img" aria-label="Phone">📞</span> 
              5. Contact Us
            </h2>
            <div className="sm:pl-9 text-gray-600 space-y-4 text-base sm:text-lg">
              <p>If you have any questions regarding our freshness guarantee or return procedure, feel free to reach out to our dedicated Noida support hub:</p>
              <div className="mt-6 flex flex-col space-y-3 bg-white p-4 sm:p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-start sm:items-center flex-col sm:flex-row">
                  <span className="font-semibold text-gray-800 w-24 mb-1 sm:mb-0">Website:</span> 
                  <a href="https://rawhalalchicken.com" className="text-red-600 hover:text-red-800 font-medium transition-colors hover:underline">
                    rawhalalchicken.com
                  </a>
                </div>
                <div className="flex items-start sm:items-center flex-col sm:flex-row">
                  <span className="font-semibold text-gray-800 w-24 mb-1 sm:mb-0">Email:</span> 
                  <a href="mailto:Rawhalalchicken@gmail.com" className="text-red-600 hover:text-red-800 font-medium transition-colors hover:underline">
                    Rawhalalchicken@gmail.com
                  </a>
                </div>
                <div className="flex items-start sm:items-center flex-col sm:flex-row">
                  <span className="font-semibold text-gray-800 w-24 mb-1 sm:mb-0">Phone:</span> 
                  <a href="tel:+919891512135" className="text-red-600 hover:text-red-800 font-medium transition-colors hover:underline">
                    +91 98915 12135
                  </a>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
