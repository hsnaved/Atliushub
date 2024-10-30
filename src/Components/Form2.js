// Interface Invoice {
//     Id: string;
//     Date: string;
//     InvoiceNumber: number;
//     CustomerName: string;
//     BillingAddress: string;
//     ShippingAddress: string;
//     GSTIN: string;
//     Items: InvoiceItem[];
//     BillSundrys: InvoiceBillSundry[];
//     TotalAmount: number;
//     } Interface InvoiceItem {
//     Id: string;
//     itemName: string;
//     quantity: number;
//     price: number;
//     amount: number;
//     }
//     Interface InvoiceBillSundry {
//     Id: string;
//     billSundryName: string;
//     amount: string;
//     }


import { useState } from 'react';

function Form2() {
  const [formData, setFormData] = useState({
    // name: '',
    // email: '',
    Id:'',
    Date: '',
    InvoiceNumber: '',
    CustomerName: '',
    BillingAddress: '',
    ShippingAddress: '',
    GSTIN: '',
    Items: '',
    BillSundrys: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

//   const handleSubmit = (event) => {
//     event.preventDefault();
    
//     console.log(formData);
//   };

  const handleSubmit = () => {

    const jsonData = JSON.stringify(formData); // Convert to JSON

    console.log("Submitted data:", jsonData); 

    setFormData({ Id:'',
        Date: '',
        InvoiceNumber: '',
        CustomerName: '',
        BillingAddress: '',
        ShippingAddress: '',
        GSTIN: '',
        Items: '',
        BillSundrys: '', }); // Reset form

  };

  return (
    <div>
    <h1>Fill the following Details</h1>
    <form onSubmit={handleSubmit}>
      <label>
        Invoice Id:
        <input type="text" name="Id" value={formData.Id} onChange={handleChange} />
      </label>
      <br></br>
      <label>
        Date:
        <input type="Date" name="Date" value={formData.Date} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      InvoiceNumber:
        <input type="text" name="InvoiceNumber" value={formData.InvoiceNumber} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      CustomerName:
        <input type="text" name="CustomerName" value={formData.CustomerName} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      BillingAddress:
        <input type="text" name="BillingAddress" value={formData.BillingAddress} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      ShippingAddress:
        <input type="text" name="ShippingAddress" value={formData.ShippingAddress} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      GSTIN:
        <input type="text" name="GSTIN" value={formData.GSTIN} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      Items:
        <input type="text" name="Items" value={formData.Items} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      BillSundrys:
        <input type="text" name="BillSundrys" value={formData.GSTIN} onChange={handleChange} />
      </label>
      <br></br>
      <label>
      TotalAmount:
        <input type="text" name="TotalAmount" value={formData.TotalAmount} onChange={handleChange} />
      </label>
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}
export default Form2;