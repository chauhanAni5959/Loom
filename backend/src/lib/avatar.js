const AVATAR_BASE_URL = "https://avatar.iran.liara.run/public";

export function buildRandomAvatarUrl(id) {
  return `${AVATAR_BASE_URL}/${id}`;
}

export function normalizeProfilePic(profilePic) {
  if (!profilePic || typeof profilePic !== "string") {
    return profilePic || "";
  }

  return profilePic.replace(
    /^https:\/\/avatar\.iran\.liara\.run\/public\/(\d+)\.png$/i,
    `${AVATAR_BASE_URL}/$1`,
  );
}

export function normalizeUserProfilePic(user) {
  if (!user) return user;

  user.profilePic = normalizeProfilePic(user.profilePic);
  return user;
}

export function normalizeUsersProfilePics(users) {
  if (!Array.isArray(users)) return users;

  users.forEach((user) => {
    normalizeUserProfilePic(user);
  });

  return users;
}
