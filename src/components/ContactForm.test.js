import React from 'react';
import { render } from "@testing-library/react";
import CheckoutForm from './ContactForm';


test("form header renders",  () => {
    const { getByText } = render (<CheckoutForm/>);
    const header = getByText(/First Name/i);
    expect(header).toBeInTheDocument();
})


