import { FaShield } from "react-icons/fa6";
import styles from './youtubePromotions.module.css'
import '../../assets/icon54/style.css'
import '../../assets/icon54-v2/style.css'
import '../../assets/icon54-v3/style.css'
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['400', '700']
});

export const metadata = {
    title: "Melo | Targeted YouTube Ads Promotion for Musicians",
    description: "Amplify your reach with Melo's YouTube Ads Promotion. Attract new listeners with precisely targeted ads designed to maximize your music's exposure and fan base.",
    openGraph: {
        images: ['https://melo.works/assets/images/favicon.png']
    },
}

export default function YtPromotions() {
    return (
        <>
            <section className="maincont" style={{ paddingTop: '6rem', paddingBottom: '6rem', backgroundColor: '#8fa9e4' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            <div className={`${styles.cardwrapper}`}>
                                <div className="align-left text-white">
                                    <h4 className={`mb-4 display-4 ${montserrat.className}`} style={{ lineHeight: '1.1', fontWeight: '400' }}>Grow Your Fanbase with YouTube Ads</h4>
                                    <p className="mb-4 text-md-start text-justify" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem' }}>Reach potential viewers where they&apos;re
                                        watching. Get started now — and start getting results, instantly.</p>
                                    <div style={{ marginLeft: '-9px' }}><a className={`btn ${styles.custom_hover} bg-white fw-bold`}
                                        href="https://docs.google.com/forms/d/e/1FAIpQLSdXUjyR-5Onqxh7GRuGpPCWO9igAVKejn-ekokvjnXUjjLrUg/viewform" target="_blank" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Get Started</a></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="item d-flex align-items-center mb-4">
                                <div className="bg-white" style={{ width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="fa" style={{ fontSize: '2rem', color: '#808080' }}><FaShield /></span>
                                </div>
                                <div className="text-box">
                                    <h4 style={{ color: '#fafafa', fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Connect with Real
                                        People</strong></h4>
                                    <h5 style={{ color: '#ffffff', fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>At Melo, we&apos;re dedicated to keeping
                                        your fan base human. No AI, No Bots - only real connections, between you and your fans.</h5>
                                </div>
                            </div>
                            <div className="item  d-flex align-items-center mb-4">
                                <div className="bg-white" style={{ width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="fa-users fa" style={{ fontSize: '2rem', color: '#808080' }}></span>
                                </div>
                                <div className="text-box">
                                    <h4 style={{ color: '#fafafa', fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Targeted Audience</strong>
                                    </h4>
                                    <h5 className="text-white" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Turn viewers into fans. Our YouTube
                                        ads use Google data to match your message to the right people at the right moment.</h5>
                                </div>
                            </div>
                            <div className="item d-flex align-items-center mb-4">
                                <div className="bg-white" style={{ width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', marginRight: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <span className="fa-music fa" style={{ fontSize: '2rem', color: '#808080' }}></span>
                                </div>
                                <div className="text-box">
                                    <h4 style={{ color: '#fafafa', fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Multi-Genre
                                        Marketing</strong></h4>
                                    <h5 className="text-white" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Musicians down the block. Artists
                                        across the country. Reach your audience in more places online while they’re searching,
                                        browsing, or watching. We connect you to the people who match your fanbase.
                                        &nbsp;</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="secondarycont bg-white pb-md-5 pb-3" style={{ paddingTop: '6rem' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 pb-lg-5">
                            <div className={`${styles.cardwrapper} mb-4`}>
                                <div className="align-center">
                                    <h4 className={`mb-4 display-4 ${montserrat.className}`} style={{ lineHeight: '1.1', fontWeight: '400' }}>
                                        Steps
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 ">
                            <div className="item first p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>1</span>
                                    </div>
                                </div>

                                <div className="mt-3 text-center ps-lg-1 ps-xxl-2">
                                    <h4 className="fs-5 custom_Height_Promotions" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Select Target
                                        Audience</strong></h4>
                                    <h5 className="fs-6 text-md-center text-justify pt-lg-2 pt-xxl-0" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>You select your audience, and we work
                                        on advertising your youtube ads in the best and most engaging way possible, filtering out
                                        the low-engagement viewers as per your demand.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_item_promotions p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>2</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 className="fs-5 custom_Height_Promotions" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Submit &
                                        Pay</strong></h4>
                                    <h5 className="fs-6 pt-lg-2 pt-xxl-0 text-md-center text-justify" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Melo promotes Music Videos on YouTube
                                        Ads and helps increase the audience at the lowest cost.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_item_promotions p-4 pe-lg-4 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number  display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>3</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 className="fs-5 custom_Height_Promotions" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}><strong>Kick Back and
                                        Relax</strong>
                                    </h4>
                                    <h5 className="fs-6 pt-lg-2 pt-xxl-0 text-md-center text-justify" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Once we&apos;ve received it, you can sit and
                                        see us do the magic. We advertise your ads throughout, until the required target is
                                        achieved.</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-3 p-lg-0 position_relative">
                            <div className="custom_item_promotions p-4 pe-lg-3 py-lg-0 ps-lg-0 d-flex align-items-center flex-column">
                                <div className="align-center w-100">
                                    <div style={{ background: '#8fa9e4', width: '60px', minWidth: '60px', height: '60px', borderRadius: '50%', textAlign: 'center', display: 'inline-block' }}>
                                        <span className="step-number  display-5" style={{ fontSize: '2rem', color: '#fff', lineHeight: '60px' }}>4</span>
                                    </div>
                                </div>
                                <div className="mt-3 text-center">
                                    <h4 className="fs-5 custom_Height_Promotions" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1.2rem', lineHeight: '1.5' }}>
                                        <strong>Congratulations!</strong>
                                    </h4>
                                    <h5 className="fs-6 pt-lg-2 pt-xxl-0 text-md-center text-justify" style={{ fontFamily: 'roboto, sans-serif', fontSize: '1rem', lineHeight: '1.5' }}>Now you don&apos;t have to worry about
                                        getting people to view your music video, manually. Slowly but surely, you will see the
                                        advertising campaign pick up speed and get you more engagement.</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}