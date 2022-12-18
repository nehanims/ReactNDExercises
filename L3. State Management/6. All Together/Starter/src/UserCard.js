import React from "react"

const User = ({ username, gameCount, showCount, updateUser }) => {

    return (
        <div className={"user-add"}>
            <p>{`${username} has played ${showCount ? gameCount : '*'} games`}</p>
            <button onClick={e => updateUser({ username, gameCount, showCount: !showCount })}>{showCount ? 'Hide' : 'Show'}</button>
            <button onClick={e => updateUser({ username, gameCount: gameCount + 1, showCount: !showCount })}>Play</button>
        </div>
    );
}

export default User;