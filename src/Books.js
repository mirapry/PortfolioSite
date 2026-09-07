import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Books() {
  const books = [
    { title: 'My Brilliant Friend', author: 'Elena Ferrante', date: '9/1/26' },
    { title: 'Joy Luck Club', author: 'Amy Tan', date: '8/12/26' },
    { title: 'Where Blackbirds Fly', author: 'Shann Ray', date: '8/5/26' },
    { title: 'Exhalation', author: 'Ted Chiang', date: '7/30/26' },
    { title: 'Orphan Bachelors', author: 'Fae Myenne Ng', date: '6/17/26' },
    { title: 'Awe', author: 'Dacher Keltner', date: '6/9/26' },
    { title: 'White Teeth', author: 'Zadie Smith', date: '4/23/26' },
    { title: 'Free', author: 'Lea Ypi', date: '1/30/26' },
    { title: 'The Sympathizer', author: 'Viet Thanh Nguyen', date: '1/3/26' },
    { title: 'Station Eleven', author: 'Emily St. John Mandel', date: '12/20/25' },
    { title: 'Unaccustomed Earth', author: 'Jojo Moyes', date: '12/13/25' },
    { title: 'Nervous Conditions', author: 'Tsitsi Dangarembga', date: '10/15/25' },
    { title: 'Me Before You', author: 'Jojo Moyes', date: '8/30/25' },
    { title: 'James', author: 'Percival Everett', date: '8/14/25' },
    { title: 'Normal People', author: 'Sally Rooney', date: '7/28/25' },
    { title: 'The Worlds I see', author: 'Fei Fei Li', date: '7/10/25' },
    { title: 'Hillbilly Elegy', author: 'JD Vance', date: '5/11/25' },
    { title: 'When Breath Becomes Air', author: 'Paul Kalinithi', date: '12/30/24' },
    { title: 'A Heart in a Body in a World', author: 'Deb Caletti' },
    { title: 'A Little Life', author: 'Hanya Yanagihara' },
    { title: 'A Very Large Expanse of Sea', author: 'Tahereh Mafi' },
    { title: 'A View From the Stars', author: 'Cixin Liu', date: '8/18/24' },
    { title: 'All the Bright Places', author: 'Jenny Han' },
    { title: 'Are You There God? It\'s Me, Margaret', author: 'Judy Blume' },
    { title: 'Between Shades of Grey', author: 'Ruta Sepetys' },
    { title: 'Bill Bryson - I\'m a Stranger Here Myself', author: 'Bill Bryson', date: '2024' },
    { title: 'Brave New World', author: 'Aldous Huxley', date: '7/31/24' },
    { title: 'Brown Girl Dreaming', author: 'Jacqueline Woodson' },
    { title: 'Chains', author: 'Laurie Halse Anderson' },
    { title: 'Counting By Sevens', author: 'Holly Goldberg Sloan' },
    { title: 'Dead End in Norvelt', author: 'Jack Gantos' },
    { title: 'Dash', author: 'Kirby Larson'},
    { title: 'Doing Good Better', author: 'William MacAskill', date: '7/12/24' },
    { title: 'Educated', author: 'Tara Westover' },
    { title: 'Eleanor and Park', author: 'Rainbow Rowell' },
    { title: 'Elon Musk', author: 'Walter Isaacson', date: '6/9/24' },
    { title: 'Everything Everything', author: 'Nicola Yoon' },
    { title: 'Factfulness', author: 'Hans Rosling', date: '7/24/24' },
    { title: 'Far from the Tree', author: 'Robin Benway' },
    { title: 'Frankenstein', author: 'Mary Shelley' },
    { title: 'Girl in Pieces', author: 'Kathleen Glasgow' },
    { title: 'Holding Up the Universe', author: 'Jandy Nelson' },
    { title: 'Insurrecto', author: 'Gina Apostol' },
    {title: 'I Am Malala', author: 'Malala Yousafzai' },
    { title: 'I\'m Not Your Perfect Mexican Daughter' },
    { title: 'I\'ll Give You the Sun', author: 'Jandy Nelson' },
    { title: 'Kira Kira', author: 'Cynthia Kadohata' },
    { title: 'Lord of the Flies', author: 'William Golding', date: '7/23' },
    { title: 'Long Way Down', author: 'Jason Reynolds' },
    { title: 'Me and Earl and the Dying Girl', author: 'Jesse Andrews' },
    { title: 'My Year of Rest and Relaxation', author: 'Ottessa Moshfegh', date: '6/23/24' },
    { title: 'Never Let Me Go', author: 'Kazuo Ishiguro' },
    { title: 'Olive\'s Ocean', author: 'Kevin Henkes' },
    { title: 'On the Come Up', auhor: 'Angie Thomas' },
    { title: 'Opposite of Always', author: 'Justin A. Reynolds' },
    { title: 'Paper Towns', author: 'John Green' },
    { title: 'Rationality', author: 'Steven Pinker' },
    { title: 'Sapiens', author: 'Yuval Noah Harari', date: '7/19/24' },
    { title: 'Shout', author: 'Laurie Halse Anderson' },
    { title: 'Stutz - Therapist with Parkinson\'s Life' },
    { title: 'Tell Me Three Things', author: 'Julie Buxbaum' },
    { title: 'The 57 Bus', author: 'Dashka Slater' },
    { title: 'The Apology', author: 'Eventhia E. Ford' },
    {title: 'The Birth of a Brand', author: 'Brian Smith' },
    { title: 'The Book Thief', author: 'Markus Zusak' },
    { title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', date: '7/2023' },
    {title: 'The Elegant Universe', author: 'Brian Greene' },
    { title: 'The Evolution of Calpurnia Tate', author: 'Jacqueline Kelly' },
    { title: 'The Girl Who Fell from the Sky' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', date: '2024' },
    { title: 'The Hate U Give', author: 'Angie Thomas' },
    { title: 'The Light We Carry', author: 'Michelle Obama', date: '6/19/24' },
    { title: 'The Ministry of the Future', author: 'Kim Stanley Robinson' },
    { title: 'The Mysterious Benedict Society', author: 'Trenton Lee Stewart' },
    { title: 'The Night Watchman', author: 'Louise Erdrich', date: '7/4/24' },
    { title: 'The Poet X', author: 'Elizabeth Acevedo' },
    { title: 'The Precipice', author: 'Toby Ord' },
    { title: 'The Reason I Jump', author: 'Naoki Higashida' },
    { title: 'The Seven Husbands of Evelyn Hugo', author: 'Taylor Jenkins Reid', date: '7/10/24' },
    { title: 'The Sky is Everywhere', author: 'Jandy Nelson' },
    { title: 'The Thing About Luck', author: 'Cynthia Kadohata'},
    { title: 'The Three-Body Problem', author: 'Liu Cixin' },
    { title: 'The Way to Bea', author: 'Kat Yeh'},
    { title: 'The Witch of Blackbird Pond', author: 'Elizabeth George Speare' },
    { title: 'There There', author: 'Tommy Orange' },
    { title: 'Tomorrow, and Tomorrow, and Tomorrow', author: 'Gabrielle Zevin', date: '8/10/24' },
    { title: 'Took', author: 'Mary Downing Hahn' },
    { title: 'Turtles All the Way Down', author: 'John Green' },
    { title: 'Watch Us Rise', author: 'Renée Watson and Ellen Hagan' },
    { title: 'Weapons of Math Destruction', author: 'Cathy O\'Neil' },
    { title: 'We Are Okay', author: 'Nina LaCour' },
    { title: 'We Were Liars', author: 'E. Lockhart' },
    { title: 'When You Reach Me', author: 'Rebecca Stead' },
    { title: 'Wonder', author: 'R.J. Palacio' },
  ];





  return (
    <div className="App">
      <div className="list-page-container">
        <div className="list-page-header">books are to be consumed as training data for our non-artificial intelligence. here is a recent list of my consumption:
        </div>

        <ul className="clean-list">
          {books.map((book, index) => (
            <li key={index} className="list-item-compact">
              <span className="book-title">{book.title}</span>
              {book.author && <span className="book-author"> - {book.author}</span>}
              {book.date && <span className="book-date"> - {book.date}</span>}
            </li>
          ))}
        </ul>
        <div className="last-updated">last updated: 1/30/26</div>
        <Link to="/thoughts" className="subpage-back">&#8592;</Link>
      </div>
    </div>
  );
}

export default Books; 