import sampleSurveyData from '../_assets/sample.json';

const SampleSurvey = () => {

    return (
        <div className="mainDisplay">
            <h1>Sample Survey</h1>
            <form>
                <div className='questions'>
                    <label htmlFor='firstQuestion'>What is your reason for considering a survey?</label>
                    <select id='firstQuestion'>
                        <option value={1}>Employee Engagement</option>
                        <option value={2}>Team Dynamics</option>
                        <option value={3}>Student Safety</option>
                        <option value={4}>Parent Involvement in Schooling</option>
                    </select>
                </div>
                <div className='questions'>
                    <label htmlFor='secondQuestion'>Are you planning to use this tool?</label>
                    <select id='secondQuestion'>
                        <option value={1}>Yes</option>
                        <option value={-1}>No</option>
                        <option value={0}>Don't Know</option>
                    </select>
                </div>
                <div className='questions'>
                    <label htmlFor='thirdQuestion'>Why or Why Not?</label>
                    <textarea id='thirdQuestion'></textarea>
                </div>
                <div className='questions' id='contactInfo'>
                    <h2>Follow Up</h2>
                    <p>Please let us know how to connect with you.</p>
                </div>
                <div className='questions'>
                    <label htmlFor='firstName'>What is your first name? </label>
                    <input id='firstName'></input>
                </div>
                <div className='questions'>
                    <label htmlFor='email'>What is your email address? </label>
                    <input id='email'></input>
                </div>
                <div className='questions'>
                    <label htmlFor='feedback'>Additional Feedback </label>
                    <textarea id='feedback'></textarea>
                </div>
                <button>
                    Submit
                </button>
            </form>
        </div>
    )

};

export default SampleSurvey;
