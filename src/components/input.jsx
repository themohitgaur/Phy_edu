import React, { useState } from 'react';
import './input.css';

function Input(props) {
    const [riverVelocity, setRiverVelocity] = useState('');
    const [personVelocity, setPersonVelocity] = useState('');
    const [angleOfSwim, setAngleOfSwim] = useState('');
    const [widthOfRiver, setWidthOfRiver] = useState('');
    const [degree, setDegree] = useState();
    const [timeTaken, setTimeTaken] = useState();

    const find = (e) => {
        e.preventDefault();
        let rVelocity = parseInt(riverVelocity);
        let pVelocity = parseInt(personVelocity);
        let aSwim = parseInt(angleOfSwim);
        let width = parseInt(widthOfRiver);
        setDegree((pVelocity * Math.sin(aSwim * Math.PI / 180)) / (rVelocity + (pVelocity * Math.cos(aSwim * Math.PI / 180))))
        setTimeTaken(width / (pVelocity * Math.sin(aSwim * Math.PI / 180)))
        //tanQ=Vmsiny/x+Vmcosy

        // time taken = width of river / (person velocity * sin(angle of swim)

        console.log("degree=", degree);
        console.log("time taken", timeTaken);

    }


    return (
        <div id="input">
            <div id="inputF">
                <div class="main">
                    <p>There is a use case where a person wishes to swim with V velocity across a river with a“X” velocity and Y degree angle from one side of the river bank to another consideringthe width to be “W”. You have find the plot a trajectory ofthe flow and time taken to cross the river​,​where all parameters can be changed viainput box of
              <br /> 1.River Velocity - X m/s
               <br />2.Person Velocity - V m/s
               <br />3.Angle of swim  - Y
               <br />4.degreeWidth of river - W metre</p>

                    <form className="form1">
                        <input className="un" type="text" name="riverVelocity" value={riverVelocity} placeholder="River Velocity" onChange={e => { setRiverVelocity(e.target.value) }}></input>
                        <input className="un" type="text" name="personVelocity" value={personVelocity} placeholder="Person Velocity" onChange={e => { setPersonVelocity(e.target.value) }}></input>
                        <input className="un" type="text" name="angleOfSwim" value={angleOfSwim} placeholder="Angle Of Swim" onChange={e => { setAngleOfSwim(e.target.value) }}></input>
                        <input className="un" type="text" name="widthOfRiver" value={widthOfRiver} placeholder="width Of River" onChange={e => { setWidthOfRiver(e.target.value) }}></input>
                        <button className="submit" onClick={find}>Solve</button>
                    </form>

                    <div className="solution">
                        <h3>Trajectory  : {degree}</h3>
                        <h3 >Time taken : {timeTaken}</h3>
                    </div>

                </div>
            </div>
        </div>

    );
}
export default Input;
