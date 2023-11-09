document.addEventListener('DOMContentLoaded', function() {
    loadSymptoms();
});

function loadSymptoms() {
    const symptoms = [
        'itching', 'skin rash', 'nodal skin eruptions', 'continuous sneezing', 'shivering', 'chills', 'joint pain', 'stomach pain', 'acidity', 'ulcers on tongue', 'muscle wasting', 'vomiting', 'burning micturition', 'spotting urination', 'fatigue', 'weight gain', 'anxiety', 'cold hands and feets', 'mood swings', 'weight loss', 'restlessness', 'lethargy', 'patches in throat', 'irregular sugar level', 'cough', 'high fever', 'sunken eyes', 'breathlessness', 'sweating', 'dehydration', 'indigestion', 'headache', 'yellowish skin', 'dark urine', 'nausea', 'loss of appetite', 'pain behind the eyes', 'back pain', 'constipation', 'abdominal pain', 'diarrhoea', 'mild fever', 'yellow urine', 'yellowing of eyes', 'acute liver failure', 'fluid overload', 'swelling of stomach', 'swelled lymph nodes', 'malaise', 'blurred and distorted vision', 'phlegm', 'throat irritation', 'redness of eyes', 'sinus pressure', 'runny nose', 'congestion', 'chest pain', 'weakness in limbs', 'fast heart rate', 'pain during bowel movements', 'pain in anal region', 'bloody stool', 'irritation in anus', 'neck pain', 'dizziness', 'cramps', 'bruising', 'obesity', 'swollen legs', 'swollen blood vessels', 'puffy face and eyes', 'enlarged thyroid', 'brittle nails', 'swollen extremeties', 'excessive hunger', 'extra marital contacts', 'drying and tingling lips', 'slurred speech', 'knee pain', 'hip joint pain', 'muscle weakness', 'stiff neck', 'swelling joints', 'movement stiffness', 'spinning movements', 'loss of balance', 'unsteadiness', 'weakness of one body side', 'loss of smell', 'bladder discomfort', 'foul smell ofurine', 'continuous feel of urine', 'passage of gases', 'internal itching', 'toxic look (typhos)', 'depression', 'irritability', 'muscle pain', 'altered sensorium', 'red spots over body', 'belly pain', 'abnormal menstruation', 'dischromic patches', 'watering from eyes', 'increased appetite', 'polyuria', 'family history', 'mucoid sputum', 'rusty sputum', 'lack of concentration', 'visual disturbances', 'receiving blood transfusion', 'receiving unsterile injections', 'coma', 'stomach bleeding', 'distention of abdomen', 'history of alcohol consumption', 'fluid overload', 'blood in sputum', 'prominent veins on calf', 'palpitations', 'painful walking', 'pus filled pimples', 'blackheads', 'scurring', 'skin peeling', 'silver like dusting', 'small dents in nails', 'inflammatory nails', 'blister', 'red sore around nose', 'yellow crust ooze', 'prognosis'
    ];

    const checkboxContainer = document.getElementById('checkboxContainer');

    symptoms.forEach(symptom => {
        const element = document.createElement("div");
        element.classList.add('ele-body');
        // element.style.overflow='hidden';
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = symptom;
        checkbox.id = symptom;

        const label = document.createElement('label');
        label.htmlFor = symptom;
        label.classList.add('checkbox-label');
        label.textContent = symptom;
        element.appendChild(checkbox);
        element.appendChild(label);
        checkboxContainer.appendChild(element);
        checkboxContainer.appendChild(document.createElement('br')); // Add a line break
    });
}

function searchSymptoms() {
    const text = document.getElementById('searchInput');
    const filter = text.value.toUpperCase();
    // const checkboxes = document.querySelectorAll('.checkbox-label');
    const elements = document.querySelectorAll('.ele-body');
   
    elements.forEach(ele => {
            ele.style.height = '53px';
            ele.style.dispaly = '';
    });
    elements.forEach(ele => {
        // console.log('jds');
        const label = ele.lastChild.textContent;
        // console.log(ele.firstChild);
        const isChecked = ele.firstChild.checked;
        console.log(isChecked);
        console.log(label);
        if (label.toUpperCase().indexOf(filter) > -1 || isChecked) {
            ele.style.display='';
            // ele.style.height = '4rem';

        } else {
            
            ele.style.display='none';
            ele.style.height = '0px';
        }
    });

}

document.getElementById('submit').addEventListener('click', function() {
    const elements = document.querySelectorAll('.ele-body');
    
    var dataToSend='' ;
    elements.forEach(ele => {
        // console.log(ele);
        const isChecked = ele.firstChild.checked;
        if(isChecked){
            dataToSend=dataToSend+ ele.firstChild.value+ ',';
        }
        });

        var dataSend = { 'key1': dataToSend.slice(0,dataToSend.length-1) };
    console.log(dataSend);
    fetch('http://localhost:6030/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataSend)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response from server:', data);
        var variable= document.getElementById('backtext');
        variable.innerHTML=data;
    })
    .catch(error => console.error('Error:', error));
});

