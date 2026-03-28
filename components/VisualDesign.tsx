import React from 'react';

const VisualDesign: React.FC = () => {
   const galleryItems = [
      { title: 'Brand Identity', img: 'https://play-lh.googleusercontent.com/NN8G4Xc03GSv2_Tu-icuoeOwSo1xoZ4ouzUl24fVlwm5OeIAo7gV0zS1dVRWgCay-BU' },
      { title: 'Campaign', img: '/assets/img004.jpg' },
      { title: 'Iconography', img: '/assets/img005.jpg' },
      { title: '3D Exploration', img: 'https://drive.google.com/uc?export=view&id=1c_Jyr1WZm-WnjGtreVyav1tG8yUyroGQ' },
   ];

   return (
      <section className="pt-12">
         <div className="flex justify-between items-end mb-12">
            <h2 className="text-2xl font-bold text-white">Visual Playground</h2>
            <span className="text-neutral-500 text-sm">Side projects</span>
         </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryItems.map((item, idx) => (
               <div key={idx} className="group cursor-pointer">
                  <div className="aspect-square bg-neutral-900 rounded-xl overflow-hidden mb-3 border border-neutral-800 group-hover:border-lime-400/50 transition-colors">
                     <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100"
                     />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 group-hover:text-white">{item.title}</p>
               </div>
            ))}
         </div>
      </section>
   );
};

export default VisualDesign;