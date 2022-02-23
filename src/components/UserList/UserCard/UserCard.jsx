export default function UserCard({user, toggle, id, active}) {
    function classToggle() {
        toggle(id);
    }

    const activeClass = active ? 'active' : '';

    return (
        <div className={activeClass} onClick={classToggle}>
            {user.name}
        </div>
    );
}