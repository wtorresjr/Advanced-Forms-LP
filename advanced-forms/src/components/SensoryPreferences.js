import sensoryPrefs from '../_assets/spi.json'
const SensoryPreferences = () => {
    const questions = sensoryPrefs.questions
    return (
        <div className="mainDisplay">
            <h1>Sensory Preferences</h1>
            <form>
                {questions.map((question) => {
                    // const input = document.querySelector(`${question.code}`);
                    // value.textContent = input.value;
                    // input.addEventListener("input", (event) => {
                        // value.textContent = event.target.value;
                        //});
                        const value = document.querySelector(`${question.code}`);
                    if (question.type === 'likert'){
                        return (
                            <div key={question.code} >
                                <label htmlFor={question.code}>{`${question.stem}`}</label>
                                <input id={question.code} type="range" min="1" max="5" step="1" />
                                <p>Value: <output value={() => {const targetInput = document.querySelector(`${question.code}`); targetInput.addEventListener("change", (e) => {this.innerText(targetInput.value)})}} id={question.code}></output></p>
                            </div>
                        )
                    }
                    if (question.type === 'section') {
                        return (
                            <div key={question.code}>
                                <h4>{question.instructions}</h4>
                            </div>
                        )
                    }
                })}
            </form >
        </div >
    )

};

export default SensoryPreferences;
