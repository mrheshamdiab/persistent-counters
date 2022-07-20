import './App.css';
const allCounters = document.getElementsByClassName('button roundbtn');

function resetall() {
    if (window.confirm("هل تريد تصفير كل العدادات؟")) {
        for (const counter of allCounters) {
            document.getElementById(counter.id).innerHTML = 0;
       }
    }
}
function resetCounter(id) {
    if (window.confirm("هل تريد تصفير هذا العداد؟")) {
        document.getElementById(id).innerHTML = 0;
    }
}

const addCounter = event => {
    document.getElementById(event.currentTarget.id).innerHTML = parseInt(document.getElementById(event.currentTarget.id).innerHTML)+1;
    };

function App() {
  return (
      <div className="App">
          <h1>e-masba7a</h1>          
          <h2 align="center">قم بالضغط على الزر الأزرق لزيادة العداد</h2>
          <h4 align="center">إجعل التسبيح والإستغفار من عاداتك عسى الله أن يكرمنا وإياكم</h4>
          <button className="btn btn-danger" onClick={resetall}>تصفير العدادات</button><div><br></br></div>
          <div className="container-fluid px-4">
              <div className="row">
                  <div className="column">
                      <div className="counter-header">سبحان الله</div>
                      <button className="button roundbtn" id="1" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(1) }} ></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">استغفر الله</div>
                      <button className="button roundbtn" id="2" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(2) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">الحمد لله</div>
                      <button className="button roundbtn" id="3" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(3) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">لا إله إلا الله</div>
                      <button className="button roundbtn" id="4" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(4) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">الله اكبر</div>
                      <button className="button roundbtn" id="5" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(5) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">رب اغفر لي</div>
                      <button className="button roundbtn" id="6" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(6) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">لا حول ولا قوة الا بالله</div>
                      <button className="button roundbtn" id="7" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(7) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">اللهمَّ إنك عفوٌّ تُحبُّ العفوَ فاعفُ عنِّي</div>
                      <button className="button roundbtn" id="8" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(8) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">اللهم صل وسلم وبارك على سيدنا محمد</div>
                      <button className="button roundbtn" id="9" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(9) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">سبحان الله وبحمده سبحان الله العظيم</div>
                      <button className="button roundbtn" id="10" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(10) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">سبحان الله والحمد لله ولا إله إلا الله والله أكبر</div>
                      <button className="button roundbtn" id="11" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(11) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">أستغفر الله الذى لا إله إلا هو الحي القيوم وأتوب إليه</div>
                      <button className="button roundbtn" id="12" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(12) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">لا اله الا انت سبحانك إني كنت من الظالمين</div>
                      <button className="button roundbtn" id="13" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(13) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">سبحان الله وبحمده عدد خلقه ورضا نفسه وزنة عرشه ومداد كلمات</div>
                      <button className="button roundbtn" id="14" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(14) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">لا إله إلا الله وحده لا شريك لهُ ، لهُ الملك ، ولهُ الحمدُ ، وهو على كل شيء قديره</div>
                      <button className="button roundbtn" id="15" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(15) }}></img>
                  </div>
                  <div className="column">
                      <div className="counter-header">حسبي الله ونعم الوكيل</div>
                      <button className="button roundbtn" id="16" onClick={addCounter}>0</button>
                      <img alt='' src="https://www.linkpicture.com/q/reset_1.jpg" height="30px" width="30px" align="right" onClick={() => { resetCounter(16) }}></img>
                  </div>
              </div>
             </div> 
             <br></br>
      <button className="btn btn-danger" onClick={resetall}>تصفير العدادات</button>
      
    </div>
  );
}

export default App;
