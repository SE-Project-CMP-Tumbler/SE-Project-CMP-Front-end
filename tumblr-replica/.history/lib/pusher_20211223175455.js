import Pusher from "pusher-js/types/src/core/pusher";
import pusherJs from "pusher-js";

export const pusher = new Pusher({
appId:process.env.app_id,
key:process.env.key,
secret:process.env.secret,
cluster:process.env.cluster,
useTLS:true
})