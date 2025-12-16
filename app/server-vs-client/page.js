"use client"

// everything we learned up until now except for the error.js, are by default server component. in server components we cannot run any hook or any event handlers. to use those we have to use a client component. and you can do that by declaring the "use client" right at the top of the page


// but declaring the whole page a client component might not be a good idea. instead you should split the minimal client activity needed portion to another folder called components or anything and specify "use client" for that specific portion like for a button.

const ServerVsClient = () => {

  console.log("yeah, this really is a client component");

  return (
    <div>
        this is a client component
    </div>
  )
}

export default ServerVsClient