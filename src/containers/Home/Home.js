import React, { Component, PropTypes } from 'react';
import {Container} from '../../theme/grid';
import {
    Image,
    FoodTruckIllust 
} from './Home.style';

export default class Home extends Component {
    static propTypes = {};

    render() {
        return (
            <Container>
                <h1>Hi Home</h1>
                <FoodTruckIllust>
                    <h2>THIS SHIT IS HARD AF</h2>
                </FoodTruckIllust>
                <p>
                    sample quotes about lochenrita. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut finibus nulla velit, sed bibendum erat tincidunt nec. Nam ultricies lacus et risus porttitor placerat. Nam erat ex, varius eu viverra quis, varius mattis orci. Vestibulum elementum imperdiet est. Nam tincidunt tortor in bibendum convallis. In cursus interdum hendrerit. Quisque odio nulla, tempor nec metus at, vulputate consequat ex. Aenean gravida accumsan dui at laoreet. Ut viverra mi sed lacinia lobortis.
                    Nam a quam imperdiet, rhoncus leo et, tempor magna. Mauris tincidunt consequat risus ut porta. Cras gravida tortor nunc, vitae scelerisque magna efficitur id. Ut eget turpis orci. Sed lacus velit, euismod vitae metus et, porta varius neque. Quisque ullamcorper sit amet leo at malesuada. Aliquam erat volutpat. Quisque fermentum euismod justo, et varius augue tincidunt at. Vivamus facilisis commodo mauris id volutpat. Duis maximus urna a volutpat posuere. Nulla sit amet mollis libero. Morbi vitae augue id metus accumsan egestas nec ac urna. Donec mollis gravida magna. Donec risus risus, condimentum dignissim consequat sit amet, rhoncus quis leo.
                    Nullam quis nunc quis orci interdum suscipit in quis dolor. Nam massa est, dictum gravida vehicula quis, molestie nec metus. Pellentesque faucibus, quam sit amet eleifend consequat, nunc ante condimentum metus, sed pretium turpis magna eget ante. Suspendisse tristique neque quis dui varius, a semper nisi dignissim. Duis molestie nisi non sollicitudin volutpat. Donec imperdiet in dui ac tincidunt. Morbi quis pulvinar erat. Vivamus aliquam urna ut risus interdum egestas. Nulla placerat tortor purus, quis posuere mauris auctor eget. Nullam egestas libero sed posuere lobortis. Phasellus in justo vel massa pretium commodo sit amet vel quam. Integer blandit enim in augue varius convallis. Proin malesuada, purus sit amet malesuada suscipit, magna felis sollicitudin enim, a tempus mauris purus quis nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In aliquet purus vestibulum lectus condimentum ullamcorper. Pellentesque varius lectus in sapien cursus lobortis sit amet et eros.
                </p>
            </Container>
        );
    }
}