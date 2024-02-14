import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Card from '../../components/Card';
import ClientCard from '../../components/ClientCard';
import Layout from './Layout';

export default function Home() {
  
  return (
    <Layout title={'Lahore Plastic'}>
      <div className='home'>
        <div className='carousel'>
          <Carousel fade interval={2000}>
            <Carousel.Item>
              <div className="img">
                <img
                  src="images/sheet.jpg"
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div>
                </section>

              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet1.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet2.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet3.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet4.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet5.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <div className="img">
                <img
                  src='images/sheet6.jpg'
                  alt=""
                />
              </div>
              <Carousel.Caption>
                <section className="slider_section">
                  <div className="detail-box">
                    <h1>
                      Lahore Plastic
                    </h1>
                    <p>
                      LAHORE PLASTIC is a leading manufacturer of quality plastic packaging material in Pakistan.
                    </p>
                  </div></section>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="products-client-list">
          <h1>Services</h1>
          <div className="prodects-client-box">
            <Card title={"PVC Shrink Films"} link={"images/shrinkFilm.jpg"} href={"/pvcshrink"} />
            <Card title={"B.O.P.P Bags"} link={"images/sheet5.jpg"} href={"/boppbags"} />
            <Card title={"Courier Printing Bags"} link={"images/courier.png"} href={"/pofshrinkfilms"} />
            <Card title={"HD PE & PP Printing Bags"} link={"images/standingPouch/sPouch1.jpg"} href={"/ziplock"} />
            <Card title={"Neck Seals"} link={"images/neckSeal.jpg"} href={"/pofshrinkfilms"} />
            <Card title={"Wrapping Stretch Film"} link={"images/wrapping.jpg"} href={"/ldpefilms"} />
            <Card title={"PVC Shrink Labels"} link={"images/sheet6.jpg"} href={"/pvcshrinksl"} />
            <Card title={"PVC Shrink Sleeves"} link={"images/sheet4.jpg"} href={"/pvcshrinksl"} />
            <Card title={"Laminated Standing Pouch"} link={"images/standingPouch/sPouch.jpg"} href={"/standingpouch"} />
            <Card title={"Zip lock Bags"} link={"images/zip.jpg"} href={"/ziplock"} />
          </div>
        </div>

        <div className="products-client-list">
          <h1>Our Clients</h1>
          <div className="prodects-client-box">
            <ClientCard link={"images/client/nippon.png"} />
            <ClientCard link={"images/client/diamond.jpg"} />
            <ClientCard link={"images/client/gobis.png"} />
            <ClientCard link={"images/client/brighto.png"} />
            <ClientCard link={"images/client/ecs.png"} />
            <ClientCard link={"images/client/servis.png"} />
            <ClientCard link={"images/client/bata.png"} />
            <ClientCard link={"images/client/hush.png"} />
            <ClientCard link={"images/client/kayseria.jpg"} />
            <ClientCard link={"images/client/kausar.png"} />
            <ClientCard link={"images/client/olio.jpg"} />
            <ClientCard link={"images/client/mitchells.jpg"} />
            <ClientCard link={"images/client/firdous.png"} />
            <ClientCard link={"images/client/bandu.png"} />
            <ClientCard link={"images/client/marhaba.png"} />
            <ClientCard link={"images/client/ajmal.png"} />
            <ClientCard link={"images/client/hameed.png"} />
          </div>
        </div>

        
      </div>
    </Layout>
  )
}
