import ScrollLine from "@/components/ScrollLine";

export default function Home() {
  return (
    <main className="min-h-screen  relative">
      <ScrollLine />
      <div className="w-full flex items-center justify-between min-h-screen">
        <div className="w-1/2 bg-transparent  glass-container -mt-48 min-h-screen ">
          <div className="h-20"></div>
          <div className="flex flex-col w-full items-start px-28 space-y-4">
            <h1 className="text-7xl font-light text-white">Welcome to</h1>
            <h1 className="text-7xl font-light text-white">Verifake</h1>
            <h1 className="text-xl font-light text-white">For DeepFake Detection</h1>
        </div>
          <button className="px-10 py-3 bg-blue-800 rounded-sm w-40 ml-28 mt-36 text-xl">Try now</button>
      </div>
        <video data-nosnippet="" className="absolute top-0 left-0 h-auto -mt-44 -z-20 ml-32" autoPlay loop playsInline muted>
          <source
            data-src="https://corebook.io/video/crystal_test6-hevc-safari.mp4"
            type="video/mp4; codecs=&quot;hvc1&quot;"
            src="https://corebook.io/video/crystal_test6-hevc-safari.mp4"
          />
          <source
            data-src="https://corebook.io/video/crystal_test6-vp9-chrome.webm"
            type="video/webm"
            src="https://corebook.io/video/crystal_test6-vp9-chrome.webm"
          />
        </video>
        <div className="text-white w-1/2 p-8">

        </div>
      </div>
      <div className="text-white p-9 w-1/2 text-justify indent-12">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quo nostrum iure ut possimus eveniet illum in obcaecati dolor minus. Pariatur numquam recusandae deleniti, voluptatem, et enim molestias quaerat porro earum tempora laborum corporis fuga! Quidem commodi expedita neque pariatur a, atque nihil repellat ad cum suscipit hic enim tenetur?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi repudiandae, fuga minima deleniti amet doloremque veritatis sunt sed autem culpa laudantium dolores eius accusantium, assumenda, labore illo. Molestias dicta ipsum odio perspiciatis repellendus molestiae reiciendis rerum nesciunt aspernatur similique.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium odit sapiente magnam inventore ullam animi tempore odio quisquam sequi, atque eius libero commodi vitae expedita temporibus labore. Mollitia voluptate harum reprehenderit facere officia ullam minima id blanditiis possimus architecto alias obcaecati, omnis corporis, dolorem non error soluta, nesciunt beatae perferendis?
      </div>
      <div className="text-white p-4 w-full flex justify-end ">
        <div className="w-1/2 px-9 text-justify indent-12">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque quo nostrum iure ut possimus eveniet illum in obcaecati dolor minus. Pariatur numquam recusandae deleniti, voluptatem, et enim molestias quaerat porro earum tempora laborum corporis fuga! Quidem commodi expedita neque pariatur a, atque nihil repellat ad cum suscipit hic enim tenetur?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam eligendi repudiandae, fuga minima deleniti amet doloremque veritatis sunt sed autem culpa laudantium dolores eius accusantium, assumenda, labore illo. Molestias dicta ipsum odio perspiciatis repellendus molestiae reiciendis rerum nesciunt aspernatur similique.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium odit sapiente magnam inventore ullam animi tempore odio quisquam sequi, atque eius libero commodi vitae expedita temporibus labore. Mollitia voluptate harum reprehenderit facere officia ullam minima id blanditiis possimus architecto alias obcaecati, omnis corporis, dolorem non error soluta, nesciunt beatae perferendis?
        </div>
      </div>
    </main>
  );
}
