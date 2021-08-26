function HomePage() {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1 style={{ fontFamily: 'fantasy', color: '#1E00FF' }}>
        spursson's website
      </h1>
      <h2
        style={{
          fontFamily: 'cursive',
          color: 'rgb(243, 103, 123)',
          marginBottom: '10rem'
        }}
      >
       Hmm, what do we have to do... aha! click the buttons below!
      </h2>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'blue',
          color: 'white'
        }}
        onClick={() => alert('Hello there, this is my website! welcome to my website andenjoy yourself')}
      >Welcome
      </button>
      <button
        style={{
          fontFamily: 'monospace',
          padding: '1rem',
          fontSize: '2rem',
          background: 'orange',
          color: 'white',
          marginTop: '2rem'
        }}
        onClick={() => {
          let name = prompt("What's your name?");
          if (name) {
            alert('Nice to meet you, ' + name + '!');
          } else {
            alert('Nice to meet you, stranger');
          }
        }}
      >
        {"What's your name?"}
      </button>
      <button
       style={{
         fontFamily: 'andenjoy',
         padding: '2rem',
         fontSize: '1rem',
         background: 'black',
         color: 'white',
         marginTop: '2rem'
      }}
      onClick={() => alert('use this URL: https://www.youtube.com/watch?v=h4m68r8kWAc . This is my favorite soccer game')}
       >There's a fun thing inside this black box
       </button> 
      
    
    </div>
   )
};
 export default HomePage;

