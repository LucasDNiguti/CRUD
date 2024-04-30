import { Request, Response, request, response} from 'express';
import CharacterService from "../services/character.services";

class CharacterController {
    async create (req: Request, res: Response) {
        const createdCharacter = await CharacterService.create(req.body)
        res.status(201);
        return res.json(createdCharacter)
    }

    async findAll(req:Request, res:Response){
        const findedCharacters = await CharacterService.findAll()
        return res.json(findedCharacters)
    }

    async findById(req:Request, res:Response) {
        const findedCharacter = await CharacterService.findById(req.params.id)
        return res.json(findedCharacter)
    }

    async update(req: Request, res: Response) {
        const updatedCharacter = await CharacterService.update(req.params.id, req.body)
        return res.json(updatedCharacter)
    }

    async delete(req: Request, res: Response) {
        const deleteCharacter = await CharacterService.delete(req.params.id)
        return res.json(deleteCharacter)
    }
}