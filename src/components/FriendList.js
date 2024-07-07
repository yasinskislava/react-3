export default function FriendList({ friends }) {
    const list = friends.map(friend => {
        const id = "id" + Math.random().toString(16).slice(2);
        return (
          <li key={id} className="item">
            <span className="status"></span>
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
          </li>
        );
    });
    return <ul className="friend-list">{list}</ul>
}