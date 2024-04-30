import characterModel from "../model/character.model";
import {CharacterType} from "../types/character.type";

class CharacterService {
    async create (character:CharacterType){
        const createdCharacter = await characterModel.create(character)
        return createdCharacter
    }

    async findAll(){
        const findedCharacters = await characterModel.find()
        return findedCharacters
    }

    async findById(id: Number){
        const findedCharacter = await characterModel.findById(id)
        return findedCharacter
    }

    async update(id: Number, character: CharacterType){
        const updateCharacter = await characterModel.FindByIdAndUpdate(id, {
    id: Number,
    name: String,
    description: String,
    resourceURI: String,
    urls: [{ type_: String, url: String }],
    thumbnail: { path: String, extension: String }
        }, {new: true}); return updateCharacter
    }

    async delete(id:Number){
        try {
            await characterModel.FindByIdAndDelete(id)
            return "Character Removido"
        } catch (error) {
            throw new Error(`Não foi possível remover ${error}`)
        }
    }
}

export default new CharacterService();