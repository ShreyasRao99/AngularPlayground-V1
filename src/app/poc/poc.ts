import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PocList } from '../shared/poc-list/poc-list';

@Component({
  imports: [PocList],
  selector: 'app-poc',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './poc.html',
})
export class Poc {}
