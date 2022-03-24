import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";


class HandBook extends Component {

    render() {

        return (
            <div className='section section-handbook'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cẩm nang</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.setting}>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                            <div className='section-customize'>
                                <div className='outer-bg'>
                                    <div className='bg-image section-handbook'></div>
                                </div>
                                <div className='position text-center'>
                                    <div>Ph.d, Bs Hoang Minh Phuong</div>
                                    <div>Cơ xương khớp</div>
                                </div>
                            </div>
                        
                        </Slider>
                    </div>

                </div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HandBook);
