import React from 'react'
import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import './ApartmentDetail.css'
import './ApartmentList'

function Main () {
  return (
    <div className="building-detail-screen1-container">
      <div className="building-detail-screen1-building-detail-screen">
        <div className="building-detail-screen1-main">
          <span className="building-detail-screen1-text textxlsemibold">Chi tiết căn hộ</span>
          <div className="building-detail-screen1-detail1">
            <div className="building-detail-screen1-info">
              <div className="building-detail-screen1-name">
                <span className="building-detail-screen1-text002 textxlsemibold">Căn hộ A.112</span>
              </div>
              <div className="building-detail-screen1-group8">
                <div className="building-detail-screen1-name1">
                  <div className="building-detail-screen1-name2">
                    <span className="building-detail-screen1-text004 textmd">Sức chứa:</span>
                  </div>
                  <span className="building-detail-screen1-text006 textmd">4 người</span>
                </div>
                <div className="building-detail-screen1-name3">
                  <div className="building-detail-screen1-name4">
                    <span className="building-detail-screen1-text008 textmd">Diện tích:</span>
                  </div>
                  <span className="building-detail-screen1-text010 textmd">98.25 m2</span>
                </div>
                <div className="building-detail-screen1-name5">
                  <span className="building-detail-screen1-text012 textmd">Phòng:</span>
                  <div className="building-detail-screen1-rooms">
                    <span className="building-detail-screen1-text014">
                      <span className="building-detail-screen1-text015">2</span>
                      <span className="building-detail-screen1-text016">phòng ngủ</span>
                    </span>
                    <span className="building-detail-screen1-text018">
                      <span className="building-detail-screen1-text019">1</span>
                      <span className="building-detail-screen1-text020">nhà vệ sinh</span>
                    </span>
                    <span className="building-detail-screen1-text022">
                      <span className="building-detail-screen1-text023">1</span>
                      <span className="building-detail-screen1-text024">nhà bếp</span>
                    </span>
                    <span className="building-detail-screen1-text026">
                      <span className="building-detail-screen1-text027">1</span>
                      <span className="building-detail-screen1-text028">phòng khách</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="building-detail-screen1-imagedefault">
              <img
                alt="Rectangle24168"
                src="/playground_assets/rectangle24168-ncx6-500h.png"
                className="building-detail-screen1-rectangle2"
              />
              <img
                alt="apartmentphoto114168"
                src="/playground_assets/apartmentphoto114168-cg0e-500h.png"
                className="building-detail-screen1-apartmentphoto11"
              />
              <div className="building-detail-screen1-nextbutton">
                <img
                  alt="Ellipse24169"
                  src="/playground_assets/ellipse24169-xqir-200h.png"
                  className="building-detail-screen1-ellipse2"
                />
                <img
                  alt="Keyboardarrowright4169"
                  src="/playground_assets/keyboardarrowright4169-gitr.svg"
                  className="building-detail-screen1-keyboardarrowright"
                />
              </div>
            </div>
            <div className="building-detail-screen1-row">
              <div className="building-detail-screen1-label">
                <span className="building-detail-screen1-text030 textsmsemibold">
                  <span>Trống</span>
                </span>
              </div>
            </div>
            <img
              alt="Line184170"
              src="/playground_assets/line184170-v97r.svg"
              className="building-detail-screen1-line18"
            />
            <div className="building-detail-screen1-ratings">
              <div className="building-detail-screen1-stars">
                <div className="building-detail-screen1-stars01">
                  <div className="building-detail-screen1-starrate">
                    <div className="building-detail-screen1-group">
                      <img
                        alt="Vector4170"
                        src="/playground_assets/vector4170-yri4.svg"
                        className="building-detail-screen1-vector"
                      />
                    </div>
                    <div className="building-detail-screen1-starrate01">
                      <div className="building-detail-screen1-group01">
                        <img
                          alt="Vector4171"
                          src="/playground_assets/vector4171-zvwb.svg"
                          className="building-detail-screen1-vector01"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="building-detail-screen1-starrate02">
                    <div className="building-detail-screen1-group02">
                      <img
                        alt="Vector4171"
                        src="/playground_assets/vector4171-h3o.svg"
                        className="building-detail-screen1-vector02"
                      />
                    </div>
                  </div>
                </div>
                <div className="building-detail-screen1-starrate03">
                  <div className="building-detail-screen1-group03">
                    <img
                      alt="Vector4172"
                      src="/playground_assets/vector4172-yonk.svg"
                      className="building-detail-screen1-vector03"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate04">
                  <div className="building-detail-screen1-group04">
                    <img
                      alt="Vector4172"
                      src="/playground_assets/vector4172-o438.svg"
                      className="building-detail-screen1-vector04"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate05">
                  <div className="building-detail-screen1-group05">
                    <img
                      alt="Vector4172"
                      src="/playground_assets/vector4172-o1en.svg"
                      className="building-detail-screen1-vector05"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="building-detail-screen1-description">
            <span className="building-detail-screen1-text032 textlgsemibold">
              <span>Mô tả</span>
            </span>
            <span className="building-detail-screen1-text034 textsm">
              <span>
                Hãy thắp sáng cuộc sống của bạn với căn hộ sáng bóng và đáng mơ
                ước này. Được trang trí chuyên nghiệp trong phòng khách và phòng
                ngủ sẽ mang lại cảm giác tráng lệ cho khách thuê.
              </span>
            </span>
          </div>
          <div className="building-detail-screen1-detail2">
            <div className="building-detail-screen1-properties">
              <span className="building-detail-screen1-text036 textlgsemibold">
                <span>Nội thất</span>
              </span>
              <div className="building-detail-screen1-info1">
                <span className="building-detail-screen1-text038">
                  <span className="building-detail-screen1-text039">2</span>
                  <span className="building-detail-screen1-text040">Quạt</span>
                </span>
                <span className="building-detail-screen1-text042">
                  <span className="building-detail-screen1-text043">1</span>
                  <span className="building-detail-screen1-text044">Tủ</span>
                </span>
                <span className="building-detail-screen1-text046">
                  <span className="building-detail-screen1-text047">1</span>
                  <span className="building-detail-screen1-text048">Tivi</span>
                </span>
                <span className="building-detail-screen1-text050">
                  <span className="building-detail-screen1-text051">1</span>
                  <span className="building-detail-screen1-text052">Máy lạnh</span>
                </span>
                <span className="building-detail-screen1-text054">
                  <span className="building-detail-screen1-text055">2</span>
                  <span className="building-detail-screen1-text056">Bộ bàn ghế</span>
                </span>
                <span className="building-detail-screen1-text058">
                  <span className="building-detail-screen1-text059">2</span>
                  <span className="building-detail-screen1-text060">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Bộ giường ngủ</span>
                </span>
                <span className="building-detail-screen1-text062">
                  <span className="building-detail-screen1-text063">1</span>
                  <span className="building-detail-screen1-text064">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Sofa</span>
                </span>
                <span className="building-detail-screen1-text066">
                  <span className="building-detail-screen1-text067">1</span>
                  <span className="building-detail-screen1-text068">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>Bàn trang điểm</span>
                </span>
              </div>
            </div>
            <div className="building-detail-screen1-properties1">
              <span className="building-detail-screen1-text070 textlgsemibold">
                <span>Dịch vụ</span>
              </span>
              <div className="building-detail-screen1-info2">
                <span className="building-detail-screen1-text072 textsm">
                  <span>Điện</span>
                </span>
                <span className="building-detail-screen1-text074 textsm">
                  <span>Nước</span>
                </span>
                <span className="building-detail-screen1-text076">
                  <span className="building-detail-screen1-text077">
                    100.000
                  </span>
                  <span className="building-detail-screen1-text078">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="building-detail-screen1-text079">
                    đồng/m3
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="building-detail-screen1-text080">
                  <span className="building-detail-screen1-text081">
                    100.000
                  </span>
                  <span className="building-detail-screen1-text082">
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="building-detail-screen1-text083">
                    đồng/kW
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span className="building-detail-screen1-text084 textsm">
                  <span>Wifi</span>
                </span>
                <span className="building-detail-screen1-text086 textsm">
                  <span>Gửi xe</span>
                </span>
                <span className="building-detail-screen1-text088 textsmsemibold">
                  <span>
                    Miễn phí
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </div>
              <span className="building-detail-screen1-text090">
                <span className="building-detail-screen1-text091">180.000</span>
                <span className="building-detail-screen1-text092">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="building-detail-screen1-text093">
                  đồng/tháng
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </div>
            <div className="building-detail-screen1-address">
              <span className="building-detail-screen1-text094 textlgsemibold">
                <span>Địa chỉ</span>
              </span>
              <span className="building-detail-screen1-text096">
                <span className="building-detail-screen1-text097">
                  <span>Tầng 3, toà nhà B1</span>
                  <br></br>
                  <span></span>
                </span>
                <span>
                  Số 92, đường Nguyễn Văn A, quận Tân A, thành phố T, tỉnh ABC.
                </span>
              </span>
            </div>
          </div>
          <div className="building-detail-screen1-detail3">
            <div className="building-detail-screen1-properties2">
              <span className="building-detail-screen1-text102 textlgsemibold">
                <span>Đánh giá</span>
              </span>
            </div>
            <div className="building-detail-screen1-ratings1">
              <div className="building-detail-screen1-stars02">
                <div className="building-detail-screen1-stars03">
                  <div className="building-detail-screen1-starrate06">
                    <div className="building-detail-screen1-group06">
                      <img
                        alt="Vector4176"
                        src="/playground_assets/vector4176-t4ov.svg"
                        className="building-detail-screen1-vector06"
                      />
                    </div>
                    <div className="building-detail-screen1-starrate07">
                      <div className="building-detail-screen1-group07">
                        <img
                          alt="Vector4177"
                          src="/playground_assets/vector4177-sju8.svg"
                          className="building-detail-screen1-vector07"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="building-detail-screen1-starrate08">
                    <div className="building-detail-screen1-group08">
                      <img
                        alt="Vector4177"
                        src="/playground_assets/vector4177-uc3.svg"
                        className="building-detail-screen1-vector08"
                      />
                    </div>
                  </div>
                </div>
                <div className="building-detail-screen1-starrate09">
                  <div className="building-detail-screen1-group09">
                    <img
                      alt="Vector4178"
                      src="/playground_assets/vector4178-fbgb.svg"
                      className="building-detail-screen1-vector09"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate10">
                  <div className="building-detail-screen1-group10">
                    <img
                      alt="Vector4178"
                      src="/playground_assets/vector4178-kfhe.svg"
                      className="building-detail-screen1-vector10"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate11">
                  <div className="building-detail-screen1-group11">
                    <img
                      alt="Vector4178"
                      src="/playground_assets/vector4178-zh68.svg"
                      className="building-detail-screen1-vector11"
                    />
                  </div>
                </div>
              </div>
              <span className="building-detail-screen1-text104 textxs">
                <span>(2 đánh giá)</span>
              </span>
            </div>
            <img
              alt="Line194179"
              src="/playground_assets/line194179-stjo.svg"
              className="building-detail-screen1-line19"
            />
            <div className="building-detail-screen1-frame1">
              <img
                alt="Avatar4179"
                src="/playground_assets/avatar4179-ipi4.svg"
                className="building-detail-screen1-avatar"
              />
              <div className="building-detail-screen1-stars04">
                <div className="building-detail-screen1-stars05">
                  <div className="building-detail-screen1-starrate12">
                    <div className="building-detail-screen1-group12">
                      <img
                        alt="Vector4179"
                        src="/playground_assets/vector4179-lolm.svg"
                        className="building-detail-screen1-vector12"
                      />
                    </div>
                    <div className="building-detail-screen1-starrate13">
                      <div className="building-detail-screen1-group13">
                        <img
                          alt="Vector4180"
                          src="/playground_assets/vector4180-eso3d.svg"
                          className="building-detail-screen1-vector13"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="building-detail-screen1-starrate14">
                    <div className="building-detail-screen1-group14">
                      <img
                        alt="Vector4180"
                        src="/playground_assets/vector4180-c274.svg"
                        className="building-detail-screen1-vector14"
                      />
                    </div>
                  </div>
                </div>
                <div className="building-detail-screen1-starrate15">
                  <div className="building-detail-screen1-group15">
                    <img
                      alt="Vector4181"
                      src="/playground_assets/vector4181-m7g9.svg"
                      className="building-detail-screen1-vector15"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate16">
                  <div className="building-detail-screen1-group16">
                    <img
                      alt="Vector4181"
                      src="/playground_assets/vector4181-uvvo.svg"
                      className="building-detail-screen1-vector16"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate17">
                  <div className="building-detail-screen1-group17">
                    <img
                      alt="Vector4181"
                      src="/playground_assets/vector4181-y67e.svg"
                      className="building-detail-screen1-vector17"
                    />
                  </div>
                </div>
              </div>
              <span className="building-detail-screen1-text106 textxs">
                <span>Nguyễn Văn A</span>
              </span>
              <span className="building-detail-screen1-text108 textsm">
                <span>
                  Hãy thắp sáng cuộc sống của bạn với căn hộ sáng bóng và đáng
                  mơ ước này. Được trang trí chuyên nghiệp trong phòng khách và
                  phòng ngủ sẽ mang lại cảm giác tráng lệ cho khách thuê.
                </span>
              </span>
              <span className="building-detail-screen1-text110 textxs">
                <span>21 thg 4, 2022 00:00</span>
              </span>
            </div>
            <div className="building-detail-screen1-comment">
              <img
                alt="Avatar4182"
                src="/playground_assets/avatar4182-i9id.svg"
                className="building-detail-screen1-avatar1"
              />
              <div className="building-detail-screen1-stars06">
                <div className="building-detail-screen1-stars07">
                  <div className="building-detail-screen1-starrate18">
                    <div className="building-detail-screen1-group18">
                      <img
                        alt="Vector4182"
                        src="/playground_assets/vector4182-41g8.svg"
                        className="building-detail-screen1-vector18"
                      />
                    </div>
                    <div className="building-detail-screen1-starrate19">
                      <div className="building-detail-screen1-group19">
                        <img
                          alt="Vector4183"
                          src="/playground_assets/vector4183-r4lb.svg"
                          className="building-detail-screen1-vector19"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="building-detail-screen1-starrate20">
                    <div className="building-detail-screen1-group20">
                      <img
                        alt="Vector4183"
                        src="/playground_assets/vector4183-wmtq.svg"
                        className="building-detail-screen1-vector20"
                      />
                    </div>
                  </div>
                </div>
                <div className="building-detail-screen1-starrate21">
                  <div className="building-detail-screen1-group21">
                    <img
                      alt="Vector4184"
                      src="/playground_assets/vector4184-y7qh.svg"
                      className="building-detail-screen1-vector21"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate22">
                  <div className="building-detail-screen1-group22">
                    <img
                      alt="Vector4184"
                      src="/playground_assets/vector4184-l18i.svg"
                      className="building-detail-screen1-vector22"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate23">
                  <div className="building-detail-screen1-group23">
                    <img
                      alt="Vector4184"
                      src="/playground_assets/vector4184-03hn.svg"
                      className="building-detail-screen1-vector23"
                    />
                  </div>
                </div>
              </div>
              <span className="building-detail-screen1-text112 textxs">
                <span>Nguyễn Văn A</span>
              </span>
              <span className="building-detail-screen1-text114 textsm">
                <span>
                  Hãy thắp sáng cuộc sống của bạn với căn hộ sáng bóng và đáng
                  mơ ước này. Được trang trí chuyên nghiệp trong phòng khách và
                  phòng ngủ sẽ mang lại cảm giác tráng lệ cho khách thuê.
                </span>
              </span>
              <span className="building-detail-screen1-text116 textxs">
                <span>21 thg 4, 2022 00:00</span>
              </span>
              <img
                alt="Line204185"
                src="/playground_assets/line204185-oiyud.svg"
                className="building-detail-screen1-line20"
              />
            </div>
            <div className="building-detail-screen1-comment1">
              <div className="building-detail-screen1-stars08">
                <div className="building-detail-screen1-stars09">
                  <div className="building-detail-screen1-starrate24">
                    <div className="building-detail-screen1-group24">
                      <img
                        alt="Vector4186"
                        src="/playground_assets/vector4186-y0kk.svg"
                        className="building-detail-screen1-vector24"
                      />
                    </div>
                    <div className="building-detail-screen1-starrate25">
                      <div className="building-detail-screen1-group25">
                        <img
                          alt="Vector4186"
                          src="/playground_assets/vector4186-l4h.svg"
                          className="building-detail-screen1-vector25"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="building-detail-screen1-starrate26">
                    <div className="building-detail-screen1-group26">
                      <img
                        alt="Vector4186"
                        src="/playground_assets/vector4186-tp0k.svg"
                        className="building-detail-screen1-vector26"
                      />
                    </div>
                  </div>
                </div>
                <div className="building-detail-screen1-starrate27">
                  <div className="building-detail-screen1-group27">
                    <img
                      alt="Vector4187"
                      src="/playground_assets/vector4187-zsgt.svg"
                      className="building-detail-screen1-vector27"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate28">
                  <div className="building-detail-screen1-group28">
                    <img
                      alt="Vector4187"
                      src="/playground_assets/vector4187-kp4h.svg"
                      className="building-detail-screen1-vector28"
                    />
                  </div>
                </div>
                <div className="building-detail-screen1-starrate29">
                  <div className="building-detail-screen1-group29">
                    <img
                      alt="Vector4188"
                      src="/playground_assets/vector4188-pf09.svg"
                      className="building-detail-screen1-vector29"
                    />
                  </div>
                </div>
              </div>
              <span className="building-detail-screen1-text118 textxs">
                <span>Nguyễn Văn A</span>
              </span>
              <span className="building-detail-screen1-text120 textxs">
                <span>21 thg 4, 2022 00:00</span>
              </span>
              <img
                alt="Line204188"
                src="/playground_assets/line204188-logp.svg"
                className="building-detail-screen1-line201"
              />
              <div className="building-detail-screen1-avatar2">
                <img
                  alt="Ellipse2I418"
                  src="/playground_assets/ellipse2i418-9qbm-200h.png"
                  className="building-detail-screen1-ellipse21"
                />
                <img
                  alt="AccountcircleI418"
                  src="/playground_assets/accountcirclei418-hgg8.svg"
                  className="building-detail-screen1-accountcircle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ApartmentDetail ()
{
  return(
    <div>
    <Routes>
      <Route path="/" element={<Main />} />
    </Routes>
    </div>
  )
}
