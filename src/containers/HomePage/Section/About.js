import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage} from 'react-intl'


class About extends Component {

    render() {
       
        return ( 
           <div className=" section-share section-about">
           <div className="section-about-header">
            Truyền thông nói gì về mạnh dev
           </div>
           <div className="section-about-content">
            <div className="content-left">
            <iframe width="100%" height="400px" 
            src="https://www.youtube.com/embed/FBJ2FGn-scs" 
            title="Thời Gian Rảnh Sinh Ra Số Phận  | Tri Kỷ Cảm Xúc Web5ngay" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            >

            </iframe>

            </div>
            <div className="content-right">
            <p>Thầy nói đúng ạ. Năm nay con 17 tuổi, có rất nhiều thời gian rảnh để làm những việc như: chơi game, lướt fb, youtube....
               Từ giờ, con sẽ sử dụng quỹ thời gian rảnh của mình vào việc học hành, đọc sách, tập thể dục và làm những điều có ích.
               Để lại bình luận này coi như 1 lời hứa với  chính bản thân ạ</p>
            </div>

           </div>
           </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
        
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(About);