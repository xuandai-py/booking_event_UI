import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from "react-slick";
import './MedicalFacility.scss';

class MedicalFacility extends Component {

    render() {

        return (
            <div className='section section-medical-facility'>
                <div className='section-container'>
                    <div className='section-header'>
                        <span className='title-section'>Cơ sở y tế nổi bật</span>
                        <button className='btn-section'>Xem thêm</button>
                    </div>
                    <div className='section-body'>
                        <Slider {...this.props.setting}>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
                            </div>
                            <div className='section-customize'>
                                <div className='bg-image section-medical-facility'></div>
                                <div>Cơ xương khớp</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
