import axios from "axios";

export const startGame = async () => {
    try {
        const url = "/game/start-game";
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const loseLife = async () => {
    try {
        const url = "/game/lose-life";
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const gameOver = async () => {
    try {
        const url = "/game/game-over";
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}

export const restartGame = async () => {
    try {
        const url = "/game/restart-game";
        const { data } = await axios.get(url);
        return data;
    } catch (error) {
        console.error(error);
    }
}
