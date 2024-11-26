import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './FormsPage.css'; 

const formsData = [
  { name: 'Draft a Will', file: 'draft_will_template.pdf' },
  { name: 'Rental Agreement', file: 'rental_agreement_template.pdf' },
  { name: 'Power of Attorney', file: 'power_of_attorney_template.pdf' },
  { name: 'Sale Agreement', file: 'sale_agreement_template.pdf' },
  { name: 'Lease Agreement', file: 'lease_agreement_template.pdf' },
  { name: 'Partnership Agreement', file: 'partnership_agreement_template.pdf' },
  { name: 'Employment Contract', file: 'employment_contract_template.pdf' },
  { name: 'Non-Disclosure Agreement (NDA)', file: 'nda_template.pdf' },
  { name: 'Confidentiality Agreement', file: 'confidentiality_agreement_template.pdf' },
  { name: 'Memorandum of Understanding (MOU)', file: 'mou_template.pdf' }
];

const FormsPage = () => {

  const handleDownload = (file) => {
    const filePath = `/templates/${file}`;
    const link = document.createElement('a');
    link.href = filePath;
    link.download = file; 
    link.click();  
  };

  return (
    <div className="forms-page-container">
      
      <Accordion defaultActiveKey="0">
        {formsData.map((form, index) => (
          <Accordion.Item eventKey={index.toString()} key={index}>
            <Accordion.Header>{form.name}</Accordion.Header>
            <Accordion.Body>
              <p>Click below to download the {form.name} template.</p>
              <Button variant="primary" onClick={() => handleDownload(form.file)}>
                Download {form.name}
              </Button>
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
};

export default FormsPage;
