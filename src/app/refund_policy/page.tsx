import React from 'react';

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white text-black py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-10 border-b border-black pb-6">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Return & Refund Policy
          </h1>
          <p className="mt-2 text-lg">
            Raw Halal Chicken
          </p>
          <p className="mt-1 text-sm text-gray-600">
            Last Updated: June 2026
          </p>
        </div>

        <div className="space-y-8 text-base sm:text-lg leading-relaxed">
          
          {/* Introduction */}
          <section>
            <p>
              At <strong>Raw Halal Chicken (rawhalalchicken.com)</strong>, we are committed to delivering the freshest, highest quality, and 100% hygienic halal meat straight to your doorstep in Noida. Since meat is a fresh and perishable food item, we follow a strict and transparent return policy to ensure complete customer satisfaction.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              1. "Check Before You Accept" Policy (Our Guarantee)
            </h2>
            <div className="space-y-3">
              <p>We strongly encourage all our customers to inspect the quality, freshness, and weight of the chicken/mutton at the exact time of delivery <strong>before accepting the order</strong> from our delivery executive.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>If you are unhappy with the freshness, cut, or quality, you can return the package <strong>instantly</strong> to the delivery rider without any questions asked.</li>
                <li>For Cash on Delivery (COD) orders, you do not need to pay for the returned item.</li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              2. Conditions Where Returns Are NOT Accepted
            </h2>
            <div className="space-y-3">
              <p>Once the delivery is accepted by you (or your representative) and the delivery executive leaves your premises, we cannot accept returns or exchanges. We do not accept returns in the following cases:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Change of mind after delivery (e.g., you decided you no longer want to cook meat today).</li>
                <li>Items stored improperly after delivery leading to spoilage.</li>
                <li>Packages that have been partially cooked, seasoned, or modified.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              3. Exceptional Quality Issues & Missing Items
            </h2>
            <div className="space-y-3">
              <p>In very rare circumstances, if you notice an issue after the delivery executive has left (such as a wrong item delivered or a weight mismatch), please notify us <strong>within 2 hours</strong> of receiving the order.</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>How to report:</strong> Contact our customer support team immediately via our official channels.</li>
                <li><strong>Requirement:</strong> You must share clear photos/videos of the raw product and the digital invoice/bill weight tag.</li>
              </ul>
              <p>
                If your complaint is genuine, we will immediately arrange for a <strong>free replacement</strong> or process a <strong>full refund</strong>.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              4. Refund Process (For Prepaid Orders)
            </h2>
            <div className="space-y-3">
              <p>If you cancel a prepaid order before it is dispatched, or if an instant return is approved by our team:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>UPI / Online Payments:</strong> The refund will be credited back to your original payment source (GPay, PhonePe, Paytm, Credit/Debit Card) within 2 to 3 business days, depending on your bank's processing time.</li>
                <li><strong>Wallet / Store Credit:</strong> Alternatively, we can issue an instant credit to your Raw Halal Chicken account wallet for your next order.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 - Contact */}
          <section>
            <h2 className="text-2xl font-bold mb-3">
              5. Contact Us
            </h2>
            <div className="space-y-3">
              <p>If you have any questions regarding our freshness guarantee or return procedure, feel free to reach out to our dedicated Noida support hub:</p>
              <div className="mt-4 space-y-2">
                <p><strong>Website:</strong> <a href="https://rawhalalchicken.com" className="hover:underline">rawhalalchicken.com</a></p>
                <p><strong>Email:</strong> <a href="mailto:Rawhalalchicken@gmail.com" className="hover:underline">Rawhalalchicken@gmail.com</a></p>
                <p><strong>Phone:</strong> <a href="tel:+919891512135" className="hover:underline">+91 98915 12135</a></p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
