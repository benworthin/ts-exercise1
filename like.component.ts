export class LikeComponent {

    constructor(private _amountOfLikes: number, private _isSelected: boolean) {}

    onclick() {

        this._amountOfLikes += (this._amountOfLikes) ? -1 : +1
        this._isSelected = !this._isSelected;

    }

    get amountOfLikes() {
        return this._amountOfLikes;
    }

    get isSelected() {
        return this._isSelected;
    }

}