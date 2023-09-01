import sensoryPrefs from '../_assets/spi.json'
const SensoryPreferences = () => {
    const questions = sensoryPrefs.questions
    // const value = document.querySelector("#value");
    // const input = document.querySelector("#likertRange");
    // value.textContent = input.value;
    // input.addEventListener("input", (event) => {
    // value.textContent = event.target.value;
    // });
    return (
        <div className="mainDisplay">
            <h1>Sensory Preferences</h1>
            <form>
                {questions.map((question) => {
                    return (
                        < div key={question.code} >
                            <label htmlFor={question.code}>{`${question.stem}`}</label>
                            <input id={question.code} type="range" min="1" max="5" step="1" />
                            <p>Value: <output id={question.code}></output></p>
                        </div>
                    )
                })}
            </form >
        </div >
    )

};

export default SensoryPreferences;
