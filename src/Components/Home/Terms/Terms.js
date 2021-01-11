import React from 'react';
import './Terms.css';
import terms from '../../../images/terms.png';

const Terms = () => {
    return (
        <div className="container terms">
            <div className="left">
                <img src={terms} alt=""/>
            </div>
            <div className="right">
                <h1>Exceptional Dental <br/>Care, on your terms</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati excepturi earum possimus in reiciendis facere repudiandae, tempore dolor minus eum tempora dolorem placeat libero ipsum, accusamus explicabo optio maxime. Sequi quas, possimus, officia et quos quisquam culpa reiciendis recusandae, temporibus autem tenetur obcaecati corporis saepe quidem corrupti dicta dolores magni iusto consectetur voluptate magnam placeat soluta. Cumque quasi rerum voluptatibus, possimus natus laborum odit, officiis cupiditate blanditiis sapiente maiores voluptate ullam eaque ipsum. Illo doloribus aliquam commodi nam, nisi odit iste assumenda error quisquam officia?</p>
                <div className="btn default_btn terms_btn">Learn More</div>
            </div>
        </div>
    );
};

export default Terms;