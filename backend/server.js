const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());


const faqsData = {
  criminalLaw: [
    { question: 'What is criminal law?', answer: 'Criminal law involves prosecution by the government of a person for an act classified as a crime.' },
    { question: 'What is bail?', answer: 'Bail is a process by which a person can be released from custody, awaiting trial.' },
  ],
  constitutionalLaw: [
    { question: 'What is constitutional law?', answer: 'Constitutional law involves the principles set forth in the constitution of a country.' },
    { question: 'What is a fundamental right?', answer: 'Fundamental rights are basic human rights enshrined in the constitution.' },
  ],
};


app.get('/api/faqs/:category', (req, res) => {
  const category = req.params.category;
  const faqs = faqsData[category];

  if (faqs) {
    res.json(faqs);
  } else {
    res.status(404).json({ message: 'Category not found' });
  }
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
