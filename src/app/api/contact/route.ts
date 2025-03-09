import { NextResponse } from 'next/server';
 
export async function POST(request: Request) {
  const data = await request.json();
  
  // Here you would typically send this data to your email service
  // For now, we'll just log it and return a success response
  console.log('Contact form submission:', data);
  
  // In a real application, you would add email sending logic here
  // Example: await sendEmail(data);
  
  return NextResponse.json(
    { message: 'Your message has been sent successfully!' },
    { status: 200 }
  );
}
