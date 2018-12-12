const quotes = [
    { quote: 'First, solve the problem. Then, write the code',
      author: 'John Johnson',
    }, 
    { quote: 'All computers wait at the same speed.',
      author: 'Unknown',
    },
    { quote: 'Computers do not solve problems. They execute the solutions',
      author: 'Unknown'
    },
    { quote: 'Software is like sex: it\'s better when it\'s free.',
      author: 'Linus Torvalds'
    },
    { quote: 'Developer: an organism that turns coffee into code.',
      author: 'Unknown'
    },
    { quote: 'Programming languages, like pizzas, come in only two sizes: too big and too small.',
      author: 'Richard Pattis'
    },
    { quote: 'The collective noun for a group of programmers is a merge-conflict.',
      author: 'Unknown'
    },
    { quote: 'If the programmers like each other, they play a game called \'pair programming\'. And if not, then the game is called \'peer review\'.',
      author: 'Anna Nachesa'        
    },
    { quote: 'Code is like humor. When you have to explain it, it\'s bad.',
      author: 'Cory House'
    },
    { quote: 'Code never lies, comments sometimes do.',
      author: 'Ron Jeffries'
    }];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
        }
    this.handleNewQuote = this.handleNewQuote.bind(this);
    }
    
    handleNewQuote = (event) => {
      this.setState({
         quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
         author: quotes[Math.floor(Math.random() * quotes.length)].author,
      });  
    };
    
    render() {
        let randomNum = Math.floor(Math.random() * quotes.length);  
        
        
        let quote = quotes[randomNum].quote;
        let author = quotes[randomNum].author;
        
        function tweetQuote() {
            window.open('https://twitter.com/intent/tweet?text=' + quote +  ' - ' + author);
        }
                
        return (
            <div id="quote-box">
                <h1>Developer quotes</h1>
                <div id="quote-text">
                    <img src="dev.svg" id="dev-img"/>
                    <p id="text"><i className="fas fa-quote-right" id="quote-icon"></i>{quote}</p>
                    <p id="author">&ndash; {author}</p>
                </div>
                <button id="new-quote" onClick={this.handleNewQuote}>New quote</button>
                <a id="tweet-quote" onClick={tweetQuote}><i className="fab fa-twitter" id="twitter-icon"></i> Tweet</a>
            </div>
        );
    }
};
                
ReactDOM.render(
    <App />,
    document.getElementById('root')
);