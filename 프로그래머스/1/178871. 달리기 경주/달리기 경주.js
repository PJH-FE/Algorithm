function solution(players, callings) {
    const playerIndex = {};
    players.map((player, index) => {
        playerIndex[player] = index;
    });
    
    
    callings.map(name => {
        const idx = playerIndex[name];

        const prevPlayer = players[idx - 1];
        [players[idx - 1], players[idx]] = [players[idx], players[idx - 1]];

        playerIndex[name] = idx - 1;
        playerIndex[prevPlayer] = idx;
    });
    return players;
}