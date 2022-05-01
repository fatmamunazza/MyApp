import { usersRepo } from "helpers/api";

function confirmation(req, res) {
  const user = usersRepo.getById(req.query.id);
  if (!user) throw "User Not Found";
  user.isApproved = true;
  // split out password from user details
  const { password, ...params } = user;

  usersRepo.update(req.query.id, params);

  return res.status(200).json(user);
}

export default confirmation;
