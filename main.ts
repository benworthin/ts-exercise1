import {LikeComponent} from './like.component';

let component = new LikeComponent(10, true);
component.onclick();
console.log(`Likes: ${component.amountOfLikes}, Selected: ${component.isSelected}`);