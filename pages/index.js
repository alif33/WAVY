import Head from 'next/head'
import Image from 'next/image'
import AnotherSection from '../components/AnotherSection/AnotherSection'
import Roadmap from '../components/Roadmap/Roadmap'
import awesomeArrowRight from "../public/img/icon/Icon awesome-arrow-left (1).svg"
import awesomeArrowLeft from "../public/img/icon/Icon awesome-arrow-left.svg"
import awesomeFire from "../public/img/icon/Icon awesome-fire.svg"
import profile1 from "../public/img/profile1.jpg"
import profile2 from "../public/img/profile2.jpg"
import profile3 from "../public/img/profile3.jpg"
import profile5 from "../public/img/profile5.png"
import profile6 from "../public/img/profile6.png"
import profile7 from "../public/img/profile7.png"
import unique from "../public/img/unique.png"


export default function Home() {
  return (
    <div>
      {/*Page title*/}
      <Head>
        <title>Wavy Sharks Society</title>
      </Head>

      {/* <!-- ============DETAILS SECTION============= --> */}
      <section className="detail-section ">
        <div className="w-9/12 mx-auto py-24">
          <div className="lg:grid lg:grid-cols-2 gap-8 justify-center items-center">
            <div className="mx-auto">
              <Image className="" src={unique} alt="unique image" />
            </div>
            <div className="">
              <div className="section-title">
                <h2 className="text-5xl text-white font-black "><span className="text-lime-500">8,888</span>
                  UNIQUE
                  <br />
                  SHARKS
                </h2>
                <p className="text-white text-base pt-5 pb-3">Lorem Ipsum is simply dummy text of the printing
                  and
                  typesetting industry. Lorem Ipsum
                  has been the industry's standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type specimen book. It has
                  survived not only five centuries, but also the leap into electronic typesetting,
                  remaining essentially unchanged.</p>
                <p className="text-white text-base pb-4">Lorem ipsum dolor, sit amet consectetur adipisicing
                  elit.
                  Debitis repellendus nostrum
                  consectetur unde temporibus beatae reprehenderit repudiandae nemo natus, ab
                  deleniti,
                  dolorum possimus saepe animi molestias dolorem iste obcaecati tenetur?</p>
                <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-2 shadow-lg mt-8">Read
                  More</button>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="meet-section">
        <div className="w-9/12 mx-auto">
          <div className="lg:grid  lg:grid-cols-3 gap-8 justify-center items-center py-24">
            <div className="">
              <div className="section-title">
                <h2 className="text-white text-4xl font-black">MEET THE WAVY SHARKS</h2>
                <p className="text-white text-base py-6">Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Neque vel, iste doloremque,
                  accusantium, hic veniam perspiciatis libero eaque dolores blanditiis voluptatum
                  iure
                  reprehenderit nihil in. Aliquid nesciunt repellat reprehenderit accusantium.</p>
                <div className="arrow-div space-x-3">
                  <button className="bg-lime-500 p-3 rounded-lg">
                    <Image className="w-9/12" src={awesomeArrowLeft} alt="" />
                  </button>
                  <button className="bg-lime-500 p-3 rounded-lg">
                    <Image className="w-9/12" src={awesomeArrowRight}
                      alt="" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-2 ">
              <div className="grid grid-cols-3  justify-center items-center ">
                <div>
                  <Image src={profile1} alt="" />
                </div>
                <div>
                  <Image src={profile2} alt="" />
                </div>
                <div>
                  <Image src={profile3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="top-section py-24">
        <div className="section-title w-9/12 mx-auto flex justify-between ">
          <button className="text-base bg-lime-500 text-white rounded-lg px-12 py-3 shadow-lg mt-8">View On
            Opensea</button>
          <h2 className="text-right text-4xl font-bold text-white"><span className="text-lime-500">TOP</span><br />WAVY
            SHARKS</h2>
        </div>

        {/* <!-- =============SLIDER IMG =============== --> */}
        <div className=" flex overflow-hidden space-x-6 mt-20">
          <div className="slider-img">
            <div>
              <Image src={profile5} alt="profile 5" />
            </div>
            <div className="mt-2 slider-title">
              <div className="flex justify-between border-b border-black pb-2">
                <h3 className="text-white  text-xl font-black slider-title">COMING SOON </h3>
                <p className="text-white text-sm bg-lime-500 py-1 px-2 rounded-lg ">150 ETC</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-gray-500 text-sm">Highest bid A LOT OF ETH</p>
                <p className="text-gray-500 text-sm inline-flex">New Bid
                  <Image className="w-1/3 -top-2 relative" src={awesomeFire} alt="awesomeFire" />

                </p>

              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={profile5} alt="profile 5" />
            </div>
            <div className="mt-2 slider-title">
              <div className="flex justify-between border-b border-black pb-2">
                <h3 className="text-white font-black text-xl slider-title">COMING SOON </h3>
                <p className="text-white text-sm bg-lime-500 py-1 px-2 rounded-lg ">150 ETC</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-gray-500 text-sm">Highest bid A LOT OF ETH</p>
                <p className="text-gray-500 text-sm inline-flex">New Bid
                  <Image className="w-1/3 -top-2 relative" src={awesomeFire} alt="awesomeFire" />
                </p>

              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={profile6} alt="profile 6" />
            </div>
            <div className="mt-2 slider-title">
              <div className="flex justify-between border-b border-black pb-2">
                <h3 className="text-white font-black text-xl slider-title">COMING SOON </h3>
                <p className="text-white text-sm bg-lime-500 py-1 px-2 rounded-lg ">150 ETC</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-gray-500 text-sm">Highest bid A LOT OF ETH</p>
                <p className="text-gray-500 text-sm inline-flex">New Bid
                  <Image className="w-1/3 -top-2 relative" src={awesomeFire} alt="awesomeFire" />
                </p>

              </div>
            </div>
          </div>
          <div>
            <div>
              <Image src={profile7} alt="profile 5" />
            </div>
            <div className="mt-2 slider-title">
              <div className="flex justify-between border-b border-black pb-2">
                <h3 className="text-white font-black text-xl slider-title">COMING SOON </h3>
                <p className="text-white text-sm bg-lime-500 py-1 px-2 rounded-lg ">150 ETC</p>
              </div>
              <div className="flex justify-between py-1">
                <p className="text-gray-500 text-sm">Highest bid A LOT OF ETH</p>
                <p className="text-gray-500 text-sm inline-flex">New Bid
                  <Image className="w-1/3 -top-2 relative" src={awesomeFire} alt="awesomeFire" />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="arrow-div space-x-20 text-center mt-10">
            <button className="bg-lime-500 p-3 rounded-lg">
              <Image className="w-9/12" src={awesomeArrowLeft} alt="" />
            </button>
            <button className="bg-lime-500 p-3 rounded-lg">
              <Image className="w-9/12" src={awesomeArrowRight} alt="" />
            </button>
          </div>
        </div>
      </section >
    {/* Roadmap */}

     <Roadmap/>
     <AnotherSection/>
     
    </div >
  )
}
