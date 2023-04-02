import axios from 'axios';
import md5 from 'js-md5';
export const publicKey = '2fe80a1d9525348cba1de3eb501b7d38';
export async function getCharacter(name) {
  const privateKey = '04e343ee7dad82c7466301cc8fc5be576e053986';

  const ts = new Date().getTime();
  const hash = md5(ts + privateKey + publicKey);

  try {
    const response = await axios.get(`http://gateway.marvel.com/v1/public/characters?name=${name}&ts=${ts}&apikey=${publicKey}&hash=${hash}`);
    console.log(response.data.data.results[0]);
    return response.data.data.results[0];
  } catch (error) {
    throw new Error(error.message);
  }
}