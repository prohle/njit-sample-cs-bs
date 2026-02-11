import React from 'react';

// 1. Your Metadata stays exactly as it is
export const metadata = {
  title: 'NJIT Computer Science | Pipeline to Tech',
  description: 'Explore the BS in Computer Science at NJIT. 90% job placement within 6 months.',
  openGraph: {
    images: ['https://www.njit.edu/sites/default/files/styles/16_9_scale_and_crop_x_large/public/major_images/computer-science-bs_0.jpg?itok=wx9Dql4x'],
  },
}

// 2. You MUST add this default export below it
export default function RedesignLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/* You can add a shared Header or Footer here if you want */}
      {children}
    </section>
  )
}