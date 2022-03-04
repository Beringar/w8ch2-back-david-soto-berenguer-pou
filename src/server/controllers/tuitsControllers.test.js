const Tuit = require("../../db/models/Tuit");
const { getAllTuits, createTuit, deleteTuit } = require("./tuitsControllers");

describe("Given getAllTuits controller", () => {
  describe("When it's passes a res and it finds tuits", () => {
    test("Then it should call res.json with the found tuits", async () => {
      const tuits = [
        {
          text: "tuit one",
          date: "1212",
        },
        {
          text: "tuit two",
          date: "1212",
        },
      ];

      const res = {
        json: jest.fn(),
      };

      Tuit.find = jest.fn().mockResolvedValue(tuits);

      await getAllTuits(null, res);

      expect(res.json).toHaveBeenCalledWith({ tuits });
    });
  });

  describe("When it receives a res and it does not find tuits", () => {
    test("Then it should call next with an error with message 'No tuits found' and code 404", async () => {
      const expectedError = expect.objectContaining({
        message: "No tuits found",
        code: 404,
      });

      const next = jest.fn();

      Tuit.find = jest.fn().mockResolvedValue(null);

      await getAllTuits(null, null, next);

      expect(next).toHaveBeenCalledWith(expectedError);
    });
  });
});

describe("Given a createTuit controller", () => {
  describe("When it receives a request with a valid body", () => {
    test("Then it should invoke the json method and the status 201", async () => {
      const req = { body: { text: "hello" } };

      Tuit.create = jest.fn().mockResolvedValue(req.body);

      const res = { json: jest.fn().mockReturnThis(), status: jest.fn() };

      await createTuit(req, res);

      expect(res.json).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });

  describe("When it receives a request without a valid body", () => {
    test("Then it should return an error", async () => {
      const req = { body: { text: [1234] } };

      Tuit.create = jest.fn().mockResolvedValue(req.body);
      const next = jest.fn();

      await createTuit(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteTuit controller", () => {
  describe("When it receives a request with a valid id", () => {
    test("Then it should return an empty object", async () => {
      const tuit = { date: "", text: "hello", likes: 2, id: 3 };
      const req = { params: { id: tuit.id } };

      Tuit.findByIdAndDelete = jest.fn().mockResolvedValue({});

      const res = { json: jest.fn() };

      await deleteTuit(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe("When it receives a request without a valid id", () => {
    test("Then it should return an error", async () => {
      const tuit = { date: "", text: "hello", likes: 2, id: 3 };
      const req = { params: { id: tuit.id } };

      Tuit.findByIdAndDelete = jest.fn().mockResolvedValue(null);

      const next = jest.fn();
      await deleteTuit(req, null, next);

      expect(next).toHaveBeenCalled();
    });
  });
});
