import React from "react";
import "./whatgpt.css";
import Feature from "../../components/Features/Feature";

// function WhatGPT3() {
//   return (
//     <div className="section__padding">
//       <main className="gpt3__whatgpt gradient__bg">
//         <div className="gpt3__what_is">
//           <div>What is GPT-3</div>
//           <p>
//             We so opinion friends me message as delight. Whole front do of plate
//             heard oh ought. His defective nor convinced residence own.
//             Connection has put impossible own apartments boisterous. At jointure
//             ladyship an insisted so humanity he. Friendly bachelor entrance to
//             on by.
//           </p>
//         </div>

//         <div className="gpt3__possiblity">
//           <h1 className="gradient__text">
//             The possibilities are beyond your imagination
//           </h1>
//           <button className="gradient__text">Explore The Library</button>
//         </div>
//         <div className="gpt3__whatgpt-about">
//           <section>
//             <h4>chatbots</h4>
//             <p>
//               We so opinion friends me message as delight. Whole front do of
//               plate heard oh ought.
//             </p>
//           </section>
//           <section>
//             <h4>knowledgebase</h4>
//             <p>
//               At jointure ladyship an insisted so humanity he. Friendly bachelor
//               entrance to on by. As put impossible own apartments b
//             </p>
//           </section>
//           <section>
//             <h4>education</h4>
//             <p>
//               At jointure ladyship an insisted so humanity he. Friendly bachelor
//               entrance to on by. As put impossible own apartments b
//             </p>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

function WhatGPT3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-features">
        <Feature
          title="What is GPT-3"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p className="gradient__text">Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
        />
        <Feature
          title="Knowledgebase"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
        <Feature
          title="Education"
          text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
        />
      </div>
    </div>
  );
}
export default WhatGPT3;
