import { Link } from 'react-router-dom';
import { images } from '../assets/images';
import { Carousel } from 'react-bootstrap';
import { GearFill, RocketTakeoffFill } from 'react-bootstrap-icons';

function Home() {
  return (
    <>
      {/* Hero Section with Carousel */}
      <Carousel className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.carouselPlaceholder1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">欢迎来到源码熊电子工作室</h1>
            <p className="fs-4">探索软硬件的无限可能，我们用代码和创意构建未来。</p>
            <Link to="/projects" className="btn btn-primary btn-lg mt-3">
              探索我们的项目
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={images.carouselPlaceholder2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h1 className="display-4 fw-bold">开源精神，持续创新</h1>
            <p className="fs-4">我们致力于分享知识，提供高质量的开源项目和教程。</p>
            <Link to="/downloads" className="btn btn-light btn-lg mt-3">
              获取学习资料
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="container">
        {/* Services and Projects Links Section */}
        <div className="custom-container-80 mb-5" data-aos="fade-up">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="h-100 p-5 bg-white rounded-3 card">
                <h2>
                  <GearFill className="section-icon" />
                  技术支持与服务
                </h2>
                <p className="text-muted">提供专业的软件开发、硬件设计和技术咨询服务。</p>
                <Link to="/support" className="btn btn-outline-primary mt-auto stretched-link">
                  查看服务
                </Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="h-100 p-5 bg-white rounded-3 card">
                <h2>
                  <RocketTakeoffFill className="section-icon" />
                  最新项目
                </h2>
                <p className="text-muted">探索我们最新的创新项目和成功案例。</p>
                <Link to="/projects" className="btn btn-outline-primary mt-auto stretched-link">
                  查看项目
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* New Project Promotion Section */}
        <div className="custom-container-80 mb-5" data-aos="fade-up" data-aos-delay="100">
          <div className="card overflow-hidden">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={images.bear} className="img-fluid rounded-start h-100" alt="新项目" style={{ objectFit: 'cover' }} />
              </div>
              <div className="col-md-8 d-flex flex-column">
                <div className="card-body p-5">
                  <h3 className="card-title fw-bold">我们的新项目：Code-bear A2 智能主控板</h3>
                  <p className="card-text text-muted fs-5">
                    探索我们最新研发的A2智能主控板。它拥有强大的处理能力、丰富的接口和开源的生态系统，是您进行物联网、机器人和自动化项目开发的理想选择。
                  </p>
                  <div className="mt-auto">
                    <Link to="/projects" className="btn btn-primary">
                      了解详情
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Promotion Section */}
        <div className="custom-container-80 mb-5" data-aos="fade-up" data-aos-delay="200">
          <div className="card">
              <div className="card-header text-center bg-transparent py-3">
                  <h2 className="fw-bold">配套视频教程</h2>
              </div>
              <div className="card-body p-4">
                  <div className="row align-items-center">
                      <div className="col-md-7">
                          <div className="ratio ratio-16x9">
                          <iframe
                              src="//player.bilibili.com/player.html?bvid=BV1jS411P7AB"
                              scrolling="no"
                              frameBorder="no"
                              allowFullScreen={true}
                              title="Embedded Bilibili Video"
                          >
                          </iframe>
                          </div>
                      </div>
                      <div className="col-md-5 mt-4 mt-md-0">
                          <h4 className="fw-bold">手把手教你学会STM32 HAL库（2025年版）</h4>
                          <p className="text-muted">适用于源码熊推出的STM32F103C8T6白色款和蓝色款。</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
