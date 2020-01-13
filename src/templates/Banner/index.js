const Banner = () => `
     <div>
          <button onClick={{localStorage['services']=JSON.stringify({ allowGa: true, allowHotjar: true })}}>Accepter</button>
          <button onClick={{localStorage['services']=JSON.stringify({ allowGa: false, allowHotjar: false })}}>Refuser</button>
     </div>
`;

export default Banner;
