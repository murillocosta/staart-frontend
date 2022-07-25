import userIcon from './../images/user.svg';
import ClockIcon from './../images/clock.svg';
import EmptyFolderIcon from './../images/empty-folder.svg';

import './../styles/Feed.css';

export default function Feed({ posts, title, subtitle }) {
  if (posts.length === 0) {
    return (
      <div className="feed-status">
        <img src={EmptyFolderIcon} alt="Pasta vazia" />
        <h1>Não encontramos nada</h1>
        <h2>
          Parece que você e seus amigos não postaram nada. Comece a escrever uma
          nova história!
        </h2>
      </div>
    );
  }

  return (
    <>
      <header>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </header>

      <section className="feed">
        {posts.map(post => (
          <article key={post.id}>
            <p>{post.content}</p>

            <footer>
              <div className="user-details">
                <img src={userIcon} alt="user" />
                <strong>{post.userName}</strong>
              </div>

              <div className="time">
                <img src={ClockIcon} alt="Clock" />
                <span>
                  Publicado em {post.publishedAt.toLocaleDateString('pt-br')}
                </span>
              </div>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
