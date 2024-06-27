import { Service } from './service.actions';

export interface ServicePortfolio {
  id: string;
  url: string;
  service?: Service;
  serviceId: string;
}
