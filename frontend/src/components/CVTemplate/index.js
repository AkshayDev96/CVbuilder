import React from 'react'
import './CVTemplate.css'


const CVTemplate = () => {

    return (
        <div id="divToPrint " className='table-responsive box-cv'>
            {/* heading */}
            <div className='body'>
                {/* name */}
                <img src="/male-placeholder-image.jpeg" className='profile' />
                <h3>Akshay Verma</h3>
                {/* adddress */}
                <p className='para'>
                    Address: Sigra, varanasi, Uttar Pradesh, 221010,India
                </p>
                {/* email */}
                <p className='email'>
                    Email: im.akshayverma0@gmail.com
                </p>
                {/* Career Object */}
                <h4>CAREER OBJECTIVE</h4>
                <p className='para'>Want to be the part of a software developer organization and utilize my knowledge,Skills
                    and expertise to contribute towards organization and professional
                    brilliance and to learn more with the passage of time from all
                    types of situations and circumstances.</p>

                {/* EDUCATION AND QUALIIFICATIONS */}
                <h4>EDUCATION AND QUALIIFICATIONS</h4>
                <div className='edu'>
                    <table className='table table-responsive' cellSpacing={4} cellPadding={4}>
                        <tr>
                            <th>SNo.</th>
                            <th>Qualification</th>
                            <th>Institution</th>
                            <th>Board/University</th>
                            <th>Percentage</th>
                            <th>Division</th>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>
                    </table>
                </div>
                {/* WORK EXPERIENCE */}
                <h4>WORK EXPERIENCE</h4>
                <div className='workexp'>
                    <table className='table table-responsive' cellSpacing={4} cellPadding={4}>
                        <tr>
                            <th>SNo.</th>
                            <th>Organization</th>
                            <th>Joining Location</th>
                            <th>CTC</th>
                            <th>Joining Date</th>
                            <th>Leaving Date</th>
                            <th>Technologies Worked on</th>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                            <td>12</td>
                        </tr>
                    </table>
                </div>
                {/* SKILLS */}
                <h4>TECHNICAL SKILLS</h4>
                <div className='skills'>
                    <p className='para'><strong>React:</strong> 96%</p>
                </div>

                {/* SOCIAL MEDIA */}
                <h4>SOCIAL MEDIA LINKS</h4>
                <div className='skills'>
                    <p className='para'><strong>Facebook:</strong> asdasd</p>
                    <p className='para'><strong>Youtube:</strong> asdasd</p>
                </div>
            </div>
        </div>
    )
}

export default CVTemplate