var inherits = function(SubClass, SuperClass) {
    //Copy all properties of super class to the subclass prototype object.
    //One major wiring is over and all super class properties will now be available to sub class
    SubClass.prototype = new SuperClass();

    //Wire the SubClass constructor to SubClass Type (Constructor)
    SubClass.prototype.constructor = SubClass;
    //Facilitate use of this._super to call base class methods.
    // Note: Applicable only for single inheritence hierarchy.
    SubClass.prototype._super = SuperClass.prototype;
};

