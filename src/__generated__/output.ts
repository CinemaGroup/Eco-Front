import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type Advantage = {
  __typename?: 'Advantage';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type AuthLoginInput = {
  loginOrEmail: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthRegisterInput = {
  email: Scalars['String']['input'];
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  user: User;
};

export type Category = {
  __typename?: 'Category';
  backgroundColor: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  groups: Array<Group>;
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  priceFrom: Scalars['Int']['output'];
  rubrics: Array<Rubric>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateFolderInput = {
  folderPath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type EditFileOrFolderNameInput = {
  newPath: Scalars['String']['input'];
  oldPath: Scalars['String']['input'];
};

export type File = {
  __typename?: 'File';
  createdAt: Scalars['DateTime']['output'];
  extension: Scalars['String']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type Folder = {
  __typename?: 'Folder';
  count: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  name: Scalars['String']['output'];
  path: Scalars['String']['output'];
  size: Scalars['String']['output'];
};

export type GetCategoryPriceInput = {
  quantity: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type Group = {
  __typename?: 'Group';
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  services: Array<Service>;
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  categoryPrice: Scalars['Int']['output'];
  createAdvantage: Advantage;
  createCategory: Category;
  createFolder: Scalars['String']['output'];
  createGroup: Group;
  createOffer: Offer;
  createReview: Review;
  createRubric: Rubric;
  createService: Service;
  deleteAdvantage: Advantage;
  deleteCategory: Category;
  deleteFileOrFolder: Scalars['String']['output'];
  deleteGroup: Group;
  deleteOffer: Offer;
  deleteOrder: Order;
  deleteRequest: Request;
  deleteReview: Review;
  deleteRubric: Rubric;
  deleteService: Service;
  editFileOrFolderName: Scalars['String']['output'];
  login: AuthResponse;
  logout: Scalars['Boolean']['output'];
  newTokens: AuthResponse;
  placeOrder: Order;
  register: AuthResponse;
  sendRequests: Request;
  toggleAdvantage: Advantage;
  toggleCategory: Category;
  toggleGroup: Group;
  toggleOffer: Offer;
  toggleReview: Review;
  toggleRubric: Rubric;
  toggleService: Service;
  updateAdvantage: Advantage;
  updateCategory: Category;
  updateGroup: Group;
  updateOffer: Offer;
  updateOrder: Order;
  updateRequest: Request;
  updateReview: Review;
  updateRubric: Rubric;
  updateService: Service;
  uploadFiles: Scalars['String']['output'];
};


export type MutationCategoryPriceArgs = {
  data: GetCategoryPriceInput;
};


export type MutationCreateFolderArgs = {
  data: CreateFolderInput;
};


export type MutationDeleteAdvantageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteFileOrFolderArgs = {
  path: Scalars['String']['input'];
};


export type MutationDeleteGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOfferArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteOrderArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRequestArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteRubricArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteServiceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationEditFileOrFolderNameArgs = {
  data: EditFileOrFolderNameInput;
};


export type MutationLoginArgs = {
  data: AuthLoginInput;
};


export type MutationPlaceOrderArgs = {
  data: PlaceOrderInput;
};


export type MutationRegisterArgs = {
  data: AuthRegisterInput;
};


export type MutationSendRequestsArgs = {
  data: RequestInput;
};


export type MutationToggleAdvantageArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleCategoryArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleGroupArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleOfferArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleReviewArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleRubricArgs = {
  id: Scalars['Int']['input'];
};


export type MutationToggleServiceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationUpdateAdvantageArgs = {
  data: UpdateAdvantageInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateGroupArgs = {
  data: UpdateGroupInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOfferArgs = {
  data: UpdateOfferInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateOrderArgs = {
  data: UpdateOrderInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateRequestArgs = {
  data: RequestInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateReviewArgs = {
  data: UpdateReviewInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateRubricArgs = {
  data: UpdateRubricInput;
  id: Scalars['Int']['input'];
};


export type MutationUpdateServiceArgs = {
  data: UpdateServiceInput;
  id: Scalars['Int']['input'];
};


export type MutationUploadFilesArgs = {
  data: UploadFilesInput;
};

export type Offer = {
  __typename?: 'Offer';
  about: Scalars['String']['output'];
  backgroundColor: Scalars['String']['output'];
  color: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  sale: Scalars['Int']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  items: Array<OrderItem>;
  name: Scalars['String']['output'];
  orderStatus: OrderStatus;
  phone: Scalars['String']['output'];
  total: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  userId: Scalars['Int']['output'];
};

export type OrderItem = {
  __typename?: 'OrderItem';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  order: Order;
  orderId: Scalars['Int']['output'];
  quantity: Scalars['Int']['output'];
  service: Service;
  updatedAt: Scalars['DateTime']['output'];
};

export enum OrderStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  InProcess = 'IN_PROCESS',
  OnHold = 'ON_HOLD',
  Pending = 'PENDING',
  Refunded = 'REFUNDED'
}

export type PlaceOrderInput = {
  items: Array<PlaceOrderItemInput>;
  name: Scalars['String']['input'];
  orderStatus: OrderStatus;
  phone: Scalars['String']['input'];
  total: Scalars['Int']['input'];
};

export type PlaceOrderItemInput = {
  quantity: Scalars['Int']['input'];
  serviceId: Scalars['Int']['input'];
};

export type Query = {
  __typename?: 'Query';
  advantageById: Advantage;
  advantages: Array<Advantage>;
  categories: Array<Category>;
  categoryById: Category;
  categoryBySlug: Category;
  folderItems: StorageItem;
  groupById: Group;
  groups: Array<Group>;
  offerById: Offer;
  offers: Array<Offer>;
  orderById: Order;
  orders: Array<Order>;
  profile: User;
  requestById: Request;
  requests: Array<Request>;
  reviewById: Review;
  reviews: Array<Review>;
  rubricById: Rubric;
  rubrics: Array<Rubric>;
  serviceById: Service;
  services: Array<Service>;
};


export type QueryAdvantageByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryAdvantagesArgs = {
  query: QueryInput;
};


export type QueryCategoriesArgs = {
  query: QueryInput;
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryCategoryBySlugArgs = {
  slug: Scalars['String']['input'];
};


export type QueryFolderItemsArgs = {
  folderPath: Scalars['String']['input'];
};


export type QueryGroupByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGroupsArgs = {
  query: QueryGroupInput;
};


export type QueryOfferByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOffersArgs = {
  query: QueryInput;
};


export type QueryOrderByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryOrdersArgs = {
  query: QueryOrderInput;
};


export type QueryRequestByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRequestsArgs = {
  query: QueryRequestInput;
};


export type QueryReviewByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryReviewsArgs = {
  query: QueryInput;
};


export type QueryRubricByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryRubricsArgs = {
  query: QueryInput;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryServiceByIdArgs = {
  id: Scalars['Int']['input'];
};


export type QueryServicesArgs = {
  query: QueryInput;
};

export type QueryGroupInput = {
  categorySlug?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
};

export type QueryInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
  status?: InputMaybe<Status>;
};

export type QueryOrderInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort: Sort;
};

export type QueryRequestInput = {
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Sort>;
};

export type Request = {
  __typename?: 'Request';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
  type: RequestType;
  updatedAt: Scalars['DateTime']['output'];
};

export type RequestInput = {
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  type: Scalars['String']['input'];
};

export enum RequestType {
  DryCleaning = 'DRY_CLEANING',
  Null = 'NULL',
  Wash = 'WASH'
}

export type Review = {
  __typename?: 'Review';
  author: Scalars['String']['output'];
  authorAvatar: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  rating: Scalars['Int']['output'];
  review: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Rubric = {
  __typename?: 'Rubric';
  categories: Array<Category>;
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  updatedAt: Scalars['DateTime']['output'];
};

export type Service = {
  __typename?: 'Service';
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  groups: Array<Group>;
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  name: Scalars['String']['output'];
  orderItems: Array<OrderItem>;
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
  status: Status;
  term: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export enum Sort {
  Newest = 'NEWEST',
  Oldest = 'OLDEST'
}

export enum Status {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type StorageItem = {
  __typename?: 'StorageItem';
  files: Array<File>;
  folders: Array<Folder>;
};

export type UpdateAdvantageInput = {
  description: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateCategoryInput = {
  backgroundColor: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  priceFrom: Scalars['Int']['input'];
  rubrics: Array<UpdateCategoryRubricInput>;
};

export type UpdateCategoryRubricInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateGroupCategoryInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateGroupInput = {
  categories: Array<UpdateGroupCategoryInput>;
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateOfferInput = {
  about: Scalars['String']['input'];
  backgroundColor: Scalars['String']['input'];
  color: Scalars['String']['input'];
  description: Scalars['String']['input'];
  imagePath: Scalars['String']['input'];
  sale: Scalars['Int']['input'];
};

export type UpdateOrderInput = {
  orderStatus: OrderStatus;
};

export type UpdateReviewInput = {
  author: Scalars['String']['input'];
  authorAvatar: Scalars['String']['input'];
  date: Scalars['String']['input'];
  rating: Scalars['Int']['input'];
  review: Scalars['String']['input'];
};

export type UpdateRubricInput = {
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type UpdateServiceGroupInput = {
  id: Scalars['Int']['input'];
  name: Scalars['String']['input'];
};

export type UpdateServiceInput = {
  description: Scalars['String']['input'];
  groups: Array<UpdateServiceGroupInput>;
  imagePath: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Int']['input'];
  term: Scalars['String']['input'];
};

export type UploadFilesInput = {
  data: Array<Scalars['Upload']['input']>;
  folderPath: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatarPath: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  login: Scalars['String']['output'];
  password: Scalars['String']['output'];
  role: UserRole;
  updatedAt: Scalars['DateTime']['output'];
};

export enum UserRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export type CreateAdvantageMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateAdvantageMutation = { createAdvantage: { id: number } };

export type DeleteAdvantageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteAdvantageMutation = { deleteAdvantage: { id: number } };

export type ToggleAdvantageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleAdvantageMutation = { toggleAdvantage: { id: number } };

export type UpdateAdvantageMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateAdvantageInput;
}>;


export type UpdateAdvantageMutation = { updateAdvantage: { id: number, status: Status } };

export type GetNewTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensMutation = { newTokens: { accessToken: string, user: { login: string, email: string, avatarPath: string, role: UserRole } } };

export type LoginMutationVariables = Exact<{
  data: AuthLoginInput;
}>;


export type LoginMutation = { login: { accessToken: string, user: { login: string, email: string, avatarPath: string, role: UserRole } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { logout: boolean };

export type RegisterMutationVariables = Exact<{
  data: AuthRegisterInput;
}>;


export type RegisterMutation = { register: { accessToken: string, user: { login: string, email: string, avatarPath: string, role: UserRole } } };

export type CreateCategoryMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateCategoryMutation = { createCategory: { id: number } };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteCategoryMutation = { deleteCategory: { id: number } };

export type GetCategoryPriceMutationVariables = Exact<{
  data: GetCategoryPriceInput;
}>;


export type GetCategoryPriceMutation = { categoryPrice: number };

export type ToggleCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleCategoryMutation = { toggleCategory: { id: number } };

export type UpdateCategoryMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateCategoryInput;
}>;


export type UpdateCategoryMutation = { updateCategory: { id: number } };

export type CreateGroupMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateGroupMutation = { createGroup: { id: number } };

export type DeleteGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteGroupMutation = { deleteGroup: { id: number } };

export type ToggleGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleGroupMutation = { toggleGroup: { id: number } };

export type UpdateGroupMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateGroupInput;
}>;


export type UpdateGroupMutation = { updateGroup: { id: number } };

export type CreateOfferMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateOfferMutation = { createOffer: { id: number } };

export type DeleteOfferMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteOfferMutation = { deleteOffer: { id: number } };

export type ToggleOfferMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleOfferMutation = { toggleOffer: { id: number } };

export type UpdateOfferMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateOfferInput;
}>;


export type UpdateOfferMutation = { updateOffer: { id: number } };

export type PlaceOrderMutationVariables = Exact<{
  data: PlaceOrderInput;
}>;


export type PlaceOrderMutation = { placeOrder: { id: number } };

export type SendRequestMutationVariables = Exact<{
  data: RequestInput;
}>;


export type SendRequestMutation = { sendRequests: { name: string, phone: string, type: RequestType } };

export type CreateReviewMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateReviewMutation = { createReview: { id: number } };

export type DeleteReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteReviewMutation = { deleteReview: { id: number } };

export type ToggleReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleReviewMutation = { toggleReview: { id: number } };

export type UpdateReviewMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateReviewInput;
}>;


export type UpdateReviewMutation = { updateReview: { id: number } };

export type CreateRubricMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateRubricMutation = { createRubric: { id: number } };

export type DeleteRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteRubricMutation = { deleteRubric: { id: number } };

export type ToggleRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleRubricMutation = { toggleRubric: { id: number } };

export type UpdateRubricMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateRubricInput;
}>;


export type UpdateRubricMutation = { updateRubric: { id: number } };

export type CreateServiceMutationVariables = Exact<{ [key: string]: never; }>;


export type CreateServiceMutation = { createService: { id: number } };

export type DeleteServiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type DeleteServiceMutation = { deleteService: { id: number } };

export type ToggleServiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ToggleServiceMutation = { toggleService: { id: number } };

export type UpdateServiceMutationVariables = Exact<{
  id: Scalars['Int']['input'];
  data: UpdateServiceInput;
}>;


export type UpdateServiceMutation = { updateService: { id: number } };

export type CreateFolderMutationVariables = Exact<{
  data: CreateFolderInput;
}>;


export type CreateFolderMutation = { createFolder: string };

export type DeleteFileOrFolderMutationVariables = Exact<{
  path: Scalars['String']['input'];
}>;


export type DeleteFileOrFolderMutation = { deleteFileOrFolder: string };

export type EditFileOrFolderNameMutationVariables = Exact<{
  data: EditFileOrFolderNameInput;
}>;


export type EditFileOrFolderNameMutation = { editFileOrFolderName: string };

export type UploadFilesMutationVariables = Exact<{
  data: UploadFilesInput;
}>;


export type UploadFilesMutation = { uploadFiles: string };

export type AdvantageByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type AdvantageByIdQuery = { advantageById: { name: string, description: string, imagePath: string } };

export type AdvantagesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type AdvantagesQuery = { advantages: Array<{ id: number, name: string, description: string, imagePath: string, status: Status, createdAt: any }> };

export type CategoriesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CategoriesQuery = { categories: Array<{ id: number, name: string, slug: string, imagePath: string, backgroundColor: string, priceFrom: number, status: Status, createdAt: any }> };

export type CalculatorCategoriesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CalculatorCategoriesQuery = { categories: Array<{ slug: string, name: string }> };

export type CategoriesCatalogQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CategoriesCatalogQuery = { categories: Array<{ id: number, name: string, slug: string, imagePath: string, backgroundColor: string, priceFrom: number, status: Status, createdAt: any, groups: Array<{ id: number, name: string, imagePath: string, services: Array<{ id: number, name: string, description: string, term: string, imagePath: string, price: number }> }> }> };

export type CategoryByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type CategoryByIdQuery = { categoryById: { name: string, imagePath: string, backgroundColor: string, priceFrom: number, rubrics: Array<{ id: number, name: string }> } };

export type CategoryBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type CategoryBySlugQuery = { categoryBySlug: { priceFrom: number } };

export type GroupByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GroupByIdQuery = { groupById: { name: string, imagePath: string, categories: Array<{ id: number, name: string }> } };

export type GroupsQueryVariables = Exact<{
  query: QueryGroupInput;
}>;


export type GroupsQuery = { groups: Array<{ id: number, name: string, slug: string, imagePath: string, status: Status, createdAt: any }> };

export type OfferByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type OfferByIdQuery = { offerById: { sale: number, description: string, imagePath: string, color: string, backgroundColor: string } };

export type OffersQueryVariables = Exact<{
  query: QueryInput;
}>;


export type OffersQuery = { offers: Array<{ id: number, sale: number, about: string, description: string, imagePath: string, backgroundColor: string, color: string, status: Status, createdAt: any }> };

export type OrderByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type OrderByIdQuery = { orderById: { id: number, name: string, phone: string, total: number, createdAt: any, items: Array<{ quantity: number, service: { id: number, name: string, slug: string, term: string, description: string, price: number, imagePath: string } }> } };

export type OrdersQueryVariables = Exact<{
  query: QueryOrderInput;
}>;


export type OrdersQuery = { orders: Array<{ id: number, orderStatus: OrderStatus, total: number, name: string, phone: string, createdAt: any, items: Array<{ quantity: number }> }> };

export type RequestByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RequestByIdQuery = { requestById: { id: number, name: string, phone: string, type: RequestType, createdAt: any } };

export type RequestsQueryVariables = Exact<{
  query: QueryRequestInput;
}>;


export type RequestsQuery = { requests: Array<{ id: number, name: string, phone: string, type: RequestType, createdAt: any }> };

export type ReviewByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ReviewByIdQuery = { reviewById: { author: string, authorAvatar: string, rating: number, review: string, date: string } };

export type ReviewsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ReviewsQuery = { reviews: Array<{ id: number, author: string, authorAvatar: string, rating: number, review: string, date: string, status: Status, createdAt: any }> };

export type RubricByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type RubricByIdQuery = { rubricById: { name: string, imagePath: string } };

export type CalculatorRubricsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type CalculatorRubricsQuery = { rubrics: Array<{ slug: string, name: string }> };

export type RubricsCatalogQueryVariables = Exact<{
  query: QueryInput;
  type?: InputMaybe<Scalars['String']['input']>;
}>;


export type RubricsCatalogQuery = { rubrics: Array<{ id: number, name: string, slug: string, imagePath: string, status: Status, createdAt: any, categories: Array<{ id: number, name: string, slug: string, imagePath: string, backgroundColor: string, priceFrom: number, groups: Array<{ id: number, name: string, imagePath: string, services: Array<{ id: number, name: string, description: string, term: string, imagePath: string, price: number }> }> }> }> };

export type RubricsQueryVariables = Exact<{
  query: QueryInput;
}>;


export type RubricsQuery = { rubrics: Array<{ id: number, name: string, slug: string, imagePath: string, status: Status, createdAt: any }> };

export type ServiceByIdQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type ServiceByIdQuery = { serviceById: { name: string, description: string, imagePath: string, price: number, term: string, groups: Array<{ id: number, name: string }> } };

export type ServicesQueryVariables = Exact<{
  query: QueryInput;
}>;


export type ServicesQuery = { services: Array<{ id: number, name: string, slug: string, description: string, price: number, imagePath: string, status: Status, createdAt: any }> };

export type GetFolderItemsQueryVariables = Exact<{
  folderPath: Scalars['String']['input'];
}>;


export type GetFolderItemsQuery = { folderItems: { folders: Array<{ name: string, size: string, count: number, path: string, createdAt: any }>, files: Array<{ name: string, size: string, extension: string, path: string, createdAt: any }> } };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { profile: { login: string, email: string, avatarPath: string, role: UserRole } };


export const CreateAdvantageDocument = gql`
    mutation CreateAdvantage {
  createAdvantage {
    id
  }
}
    `;
export type CreateAdvantageMutationFn = Apollo.MutationFunction<CreateAdvantageMutation, CreateAdvantageMutationVariables>;

/**
 * __useCreateAdvantageMutation__
 *
 * To run a mutation, you first call `useCreateAdvantageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdvantageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdvantageMutation, { data, loading, error }] = useCreateAdvantageMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateAdvantageMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdvantageMutation, CreateAdvantageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdvantageMutation, CreateAdvantageMutationVariables>(CreateAdvantageDocument, options);
      }
export type CreateAdvantageMutationHookResult = ReturnType<typeof useCreateAdvantageMutation>;
export type CreateAdvantageMutationResult = Apollo.MutationResult<CreateAdvantageMutation>;
export type CreateAdvantageMutationOptions = Apollo.BaseMutationOptions<CreateAdvantageMutation, CreateAdvantageMutationVariables>;
export const DeleteAdvantageDocument = gql`
    mutation DeleteAdvantage($id: Int!) {
  deleteAdvantage(id: $id) {
    id
  }
}
    `;
export type DeleteAdvantageMutationFn = Apollo.MutationFunction<DeleteAdvantageMutation, DeleteAdvantageMutationVariables>;

/**
 * __useDeleteAdvantageMutation__
 *
 * To run a mutation, you first call `useDeleteAdvantageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAdvantageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAdvantageMutation, { data, loading, error }] = useDeleteAdvantageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAdvantageMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAdvantageMutation, DeleteAdvantageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAdvantageMutation, DeleteAdvantageMutationVariables>(DeleteAdvantageDocument, options);
      }
export type DeleteAdvantageMutationHookResult = ReturnType<typeof useDeleteAdvantageMutation>;
export type DeleteAdvantageMutationResult = Apollo.MutationResult<DeleteAdvantageMutation>;
export type DeleteAdvantageMutationOptions = Apollo.BaseMutationOptions<DeleteAdvantageMutation, DeleteAdvantageMutationVariables>;
export const ToggleAdvantageDocument = gql`
    mutation ToggleAdvantage($id: Int!) {
  toggleAdvantage(id: $id) {
    id
  }
}
    `;
export type ToggleAdvantageMutationFn = Apollo.MutationFunction<ToggleAdvantageMutation, ToggleAdvantageMutationVariables>;

/**
 * __useToggleAdvantageMutation__
 *
 * To run a mutation, you first call `useToggleAdvantageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleAdvantageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleAdvantageMutation, { data, loading, error }] = useToggleAdvantageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleAdvantageMutation(baseOptions?: Apollo.MutationHookOptions<ToggleAdvantageMutation, ToggleAdvantageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleAdvantageMutation, ToggleAdvantageMutationVariables>(ToggleAdvantageDocument, options);
      }
export type ToggleAdvantageMutationHookResult = ReturnType<typeof useToggleAdvantageMutation>;
export type ToggleAdvantageMutationResult = Apollo.MutationResult<ToggleAdvantageMutation>;
export type ToggleAdvantageMutationOptions = Apollo.BaseMutationOptions<ToggleAdvantageMutation, ToggleAdvantageMutationVariables>;
export const UpdateAdvantageDocument = gql`
    mutation UpdateAdvantage($id: Int!, $data: UpdateAdvantageInput!) {
  updateAdvantage(id: $id, data: $data) {
    id
    status
  }
}
    `;
export type UpdateAdvantageMutationFn = Apollo.MutationFunction<UpdateAdvantageMutation, UpdateAdvantageMutationVariables>;

/**
 * __useUpdateAdvantageMutation__
 *
 * To run a mutation, you first call `useUpdateAdvantageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAdvantageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAdvantageMutation, { data, loading, error }] = useUpdateAdvantageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAdvantageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAdvantageMutation, UpdateAdvantageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAdvantageMutation, UpdateAdvantageMutationVariables>(UpdateAdvantageDocument, options);
      }
export type UpdateAdvantageMutationHookResult = ReturnType<typeof useUpdateAdvantageMutation>;
export type UpdateAdvantageMutationResult = Apollo.MutationResult<UpdateAdvantageMutation>;
export type UpdateAdvantageMutationOptions = Apollo.BaseMutationOptions<UpdateAdvantageMutation, UpdateAdvantageMutationVariables>;
export const GetNewTokensDocument = gql`
    mutation GetNewTokens {
  newTokens {
    user {
      login
      email
      avatarPath
      role
    }
    accessToken
  }
}
    `;
export type GetNewTokensMutationFn = Apollo.MutationFunction<GetNewTokensMutation, GetNewTokensMutationVariables>;

/**
 * __useGetNewTokensMutation__
 *
 * To run a mutation, you first call `useGetNewTokensMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetNewTokensMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getNewTokensMutation, { data, loading, error }] = useGetNewTokensMutation({
 *   variables: {
 *   },
 * });
 */
export function useGetNewTokensMutation(baseOptions?: Apollo.MutationHookOptions<GetNewTokensMutation, GetNewTokensMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetNewTokensMutation, GetNewTokensMutationVariables>(GetNewTokensDocument, options);
      }
export type GetNewTokensMutationHookResult = ReturnType<typeof useGetNewTokensMutation>;
export type GetNewTokensMutationResult = Apollo.MutationResult<GetNewTokensMutation>;
export type GetNewTokensMutationOptions = Apollo.BaseMutationOptions<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const LoginDocument = gql`
    mutation login($data: AuthLoginInput!) {
  login(data: $data) {
    user {
      login
      email
      avatarPath
      role
    }
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation register($data: AuthRegisterInput!) {
  register(data: $data) {
    user {
      login
      email
      avatarPath
      role
    }
    accessToken
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory {
  createCategory {
    id
  }
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: Int!) {
  deleteCategory(id: $id) {
    id
  }
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const GetCategoryPriceDocument = gql`
    mutation GetCategoryPrice($data: GetCategoryPriceInput!) {
  categoryPrice(data: $data)
}
    `;
export type GetCategoryPriceMutationFn = Apollo.MutationFunction<GetCategoryPriceMutation, GetCategoryPriceMutationVariables>;

/**
 * __useGetCategoryPriceMutation__
 *
 * To run a mutation, you first call `useGetCategoryPriceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryPriceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [getCategoryPriceMutation, { data, loading, error }] = useGetCategoryPriceMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetCategoryPriceMutation(baseOptions?: Apollo.MutationHookOptions<GetCategoryPriceMutation, GetCategoryPriceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GetCategoryPriceMutation, GetCategoryPriceMutationVariables>(GetCategoryPriceDocument, options);
      }
export type GetCategoryPriceMutationHookResult = ReturnType<typeof useGetCategoryPriceMutation>;
export type GetCategoryPriceMutationResult = Apollo.MutationResult<GetCategoryPriceMutation>;
export type GetCategoryPriceMutationOptions = Apollo.BaseMutationOptions<GetCategoryPriceMutation, GetCategoryPriceMutationVariables>;
export const ToggleCategoryDocument = gql`
    mutation ToggleCategory($id: Int!) {
  toggleCategory(id: $id) {
    id
  }
}
    `;
export type ToggleCategoryMutationFn = Apollo.MutationFunction<ToggleCategoryMutation, ToggleCategoryMutationVariables>;

/**
 * __useToggleCategoryMutation__
 *
 * To run a mutation, you first call `useToggleCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleCategoryMutation, { data, loading, error }] = useToggleCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleCategoryMutation(baseOptions?: Apollo.MutationHookOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleCategoryMutation, ToggleCategoryMutationVariables>(ToggleCategoryDocument, options);
      }
export type ToggleCategoryMutationHookResult = ReturnType<typeof useToggleCategoryMutation>;
export type ToggleCategoryMutationResult = Apollo.MutationResult<ToggleCategoryMutation>;
export type ToggleCategoryMutationOptions = Apollo.BaseMutationOptions<ToggleCategoryMutation, ToggleCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation updateCategory($id: Int!, $data: UpdateCategoryInput!) {
  updateCategory(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const CreateGroupDocument = gql`
    mutation CreateGroup {
  createGroup {
    id
  }
}
    `;
export type CreateGroupMutationFn = Apollo.MutationFunction<CreateGroupMutation, CreateGroupMutationVariables>;

/**
 * __useCreateGroupMutation__
 *
 * To run a mutation, you first call `useCreateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGroupMutation, { data, loading, error }] = useCreateGroupMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateGroupMutation(baseOptions?: Apollo.MutationHookOptions<CreateGroupMutation, CreateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGroupMutation, CreateGroupMutationVariables>(CreateGroupDocument, options);
      }
export type CreateGroupMutationHookResult = ReturnType<typeof useCreateGroupMutation>;
export type CreateGroupMutationResult = Apollo.MutationResult<CreateGroupMutation>;
export type CreateGroupMutationOptions = Apollo.BaseMutationOptions<CreateGroupMutation, CreateGroupMutationVariables>;
export const DeleteGroupDocument = gql`
    mutation DeleteGroup($id: Int!) {
  deleteGroup(id: $id) {
    id
  }
}
    `;
export type DeleteGroupMutationFn = Apollo.MutationFunction<DeleteGroupMutation, DeleteGroupMutationVariables>;

/**
 * __useDeleteGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGroupMutation, { data, loading, error }] = useDeleteGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGroupMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGroupMutation, DeleteGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGroupMutation, DeleteGroupMutationVariables>(DeleteGroupDocument, options);
      }
export type DeleteGroupMutationHookResult = ReturnType<typeof useDeleteGroupMutation>;
export type DeleteGroupMutationResult = Apollo.MutationResult<DeleteGroupMutation>;
export type DeleteGroupMutationOptions = Apollo.BaseMutationOptions<DeleteGroupMutation, DeleteGroupMutationVariables>;
export const ToggleGroupDocument = gql`
    mutation ToggleGroup($id: Int!) {
  toggleGroup(id: $id) {
    id
  }
}
    `;
export type ToggleGroupMutationFn = Apollo.MutationFunction<ToggleGroupMutation, ToggleGroupMutationVariables>;

/**
 * __useToggleGroupMutation__
 *
 * To run a mutation, you first call `useToggleGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleGroupMutation, { data, loading, error }] = useToggleGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleGroupMutation(baseOptions?: Apollo.MutationHookOptions<ToggleGroupMutation, ToggleGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleGroupMutation, ToggleGroupMutationVariables>(ToggleGroupDocument, options);
      }
export type ToggleGroupMutationHookResult = ReturnType<typeof useToggleGroupMutation>;
export type ToggleGroupMutationResult = Apollo.MutationResult<ToggleGroupMutation>;
export type ToggleGroupMutationOptions = Apollo.BaseMutationOptions<ToggleGroupMutation, ToggleGroupMutationVariables>;
export const UpdateGroupDocument = gql`
    mutation updateGroup($id: Int!, $data: UpdateGroupInput!) {
  updateGroup(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateGroupMutationFn = Apollo.MutationFunction<UpdateGroupMutation, UpdateGroupMutationVariables>;

/**
 * __useUpdateGroupMutation__
 *
 * To run a mutation, you first call `useUpdateGroupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGroupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGroupMutation, { data, loading, error }] = useUpdateGroupMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateGroupMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGroupMutation, UpdateGroupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGroupMutation, UpdateGroupMutationVariables>(UpdateGroupDocument, options);
      }
export type UpdateGroupMutationHookResult = ReturnType<typeof useUpdateGroupMutation>;
export type UpdateGroupMutationResult = Apollo.MutationResult<UpdateGroupMutation>;
export type UpdateGroupMutationOptions = Apollo.BaseMutationOptions<UpdateGroupMutation, UpdateGroupMutationVariables>;
export const CreateOfferDocument = gql`
    mutation CreateOffer {
  createOffer {
    id
  }
}
    `;
export type CreateOfferMutationFn = Apollo.MutationFunction<CreateOfferMutation, CreateOfferMutationVariables>;

/**
 * __useCreateOfferMutation__
 *
 * To run a mutation, you first call `useCreateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOfferMutation, { data, loading, error }] = useCreateOfferMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateOfferMutation(baseOptions?: Apollo.MutationHookOptions<CreateOfferMutation, CreateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateOfferMutation, CreateOfferMutationVariables>(CreateOfferDocument, options);
      }
export type CreateOfferMutationHookResult = ReturnType<typeof useCreateOfferMutation>;
export type CreateOfferMutationResult = Apollo.MutationResult<CreateOfferMutation>;
export type CreateOfferMutationOptions = Apollo.BaseMutationOptions<CreateOfferMutation, CreateOfferMutationVariables>;
export const DeleteOfferDocument = gql`
    mutation DeleteOffer($id: Int!) {
  deleteOffer(id: $id) {
    id
  }
}
    `;
export type DeleteOfferMutationFn = Apollo.MutationFunction<DeleteOfferMutation, DeleteOfferMutationVariables>;

/**
 * __useDeleteOfferMutation__
 *
 * To run a mutation, you first call `useDeleteOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteOfferMutation, { data, loading, error }] = useDeleteOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteOfferMutation(baseOptions?: Apollo.MutationHookOptions<DeleteOfferMutation, DeleteOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteOfferMutation, DeleteOfferMutationVariables>(DeleteOfferDocument, options);
      }
export type DeleteOfferMutationHookResult = ReturnType<typeof useDeleteOfferMutation>;
export type DeleteOfferMutationResult = Apollo.MutationResult<DeleteOfferMutation>;
export type DeleteOfferMutationOptions = Apollo.BaseMutationOptions<DeleteOfferMutation, DeleteOfferMutationVariables>;
export const ToggleOfferDocument = gql`
    mutation ToggleOffer($id: Int!) {
  toggleOffer(id: $id) {
    id
  }
}
    `;
export type ToggleOfferMutationFn = Apollo.MutationFunction<ToggleOfferMutation, ToggleOfferMutationVariables>;

/**
 * __useToggleOfferMutation__
 *
 * To run a mutation, you first call `useToggleOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleOfferMutation, { data, loading, error }] = useToggleOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleOfferMutation(baseOptions?: Apollo.MutationHookOptions<ToggleOfferMutation, ToggleOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleOfferMutation, ToggleOfferMutationVariables>(ToggleOfferDocument, options);
      }
export type ToggleOfferMutationHookResult = ReturnType<typeof useToggleOfferMutation>;
export type ToggleOfferMutationResult = Apollo.MutationResult<ToggleOfferMutation>;
export type ToggleOfferMutationOptions = Apollo.BaseMutationOptions<ToggleOfferMutation, ToggleOfferMutationVariables>;
export const UpdateOfferDocument = gql`
    mutation updateOffer($id: Int!, $data: UpdateOfferInput!) {
  updateOffer(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateOfferMutationFn = Apollo.MutationFunction<UpdateOfferMutation, UpdateOfferMutationVariables>;

/**
 * __useUpdateOfferMutation__
 *
 * To run a mutation, you first call `useUpdateOfferMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateOfferMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateOfferMutation, { data, loading, error }] = useUpdateOfferMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateOfferMutation(baseOptions?: Apollo.MutationHookOptions<UpdateOfferMutation, UpdateOfferMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateOfferMutation, UpdateOfferMutationVariables>(UpdateOfferDocument, options);
      }
export type UpdateOfferMutationHookResult = ReturnType<typeof useUpdateOfferMutation>;
export type UpdateOfferMutationResult = Apollo.MutationResult<UpdateOfferMutation>;
export type UpdateOfferMutationOptions = Apollo.BaseMutationOptions<UpdateOfferMutation, UpdateOfferMutationVariables>;
export const PlaceOrderDocument = gql`
    mutation PlaceOrder($data: PlaceOrderInput!) {
  placeOrder(data: $data) {
    id
  }
}
    `;
export type PlaceOrderMutationFn = Apollo.MutationFunction<PlaceOrderMutation, PlaceOrderMutationVariables>;

/**
 * __usePlaceOrderMutation__
 *
 * To run a mutation, you first call `usePlaceOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeOrderMutation, { data, loading, error }] = usePlaceOrderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function usePlaceOrderMutation(baseOptions?: Apollo.MutationHookOptions<PlaceOrderMutation, PlaceOrderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceOrderMutation, PlaceOrderMutationVariables>(PlaceOrderDocument, options);
      }
export type PlaceOrderMutationHookResult = ReturnType<typeof usePlaceOrderMutation>;
export type PlaceOrderMutationResult = Apollo.MutationResult<PlaceOrderMutation>;
export type PlaceOrderMutationOptions = Apollo.BaseMutationOptions<PlaceOrderMutation, PlaceOrderMutationVariables>;
export const SendRequestDocument = gql`
    mutation sendRequest($data: RequestInput!) {
  sendRequests(data: $data) {
    name
    phone
    type
  }
}
    `;
export type SendRequestMutationFn = Apollo.MutationFunction<SendRequestMutation, SendRequestMutationVariables>;

/**
 * __useSendRequestMutation__
 *
 * To run a mutation, you first call `useSendRequestMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendRequestMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendRequestMutation, { data, loading, error }] = useSendRequestMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendRequestMutation(baseOptions?: Apollo.MutationHookOptions<SendRequestMutation, SendRequestMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendRequestMutation, SendRequestMutationVariables>(SendRequestDocument, options);
      }
export type SendRequestMutationHookResult = ReturnType<typeof useSendRequestMutation>;
export type SendRequestMutationResult = Apollo.MutationResult<SendRequestMutation>;
export type SendRequestMutationOptions = Apollo.BaseMutationOptions<SendRequestMutation, SendRequestMutationVariables>;
export const CreateReviewDocument = gql`
    mutation CreateReview {
  createReview {
    id
  }
}
    `;
export type CreateReviewMutationFn = Apollo.MutationFunction<CreateReviewMutation, CreateReviewMutationVariables>;

/**
 * __useCreateReviewMutation__
 *
 * To run a mutation, you first call `useCreateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createReviewMutation, { data, loading, error }] = useCreateReviewMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateReviewMutation, CreateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateReviewMutation, CreateReviewMutationVariables>(CreateReviewDocument, options);
      }
export type CreateReviewMutationHookResult = ReturnType<typeof useCreateReviewMutation>;
export type CreateReviewMutationResult = Apollo.MutationResult<CreateReviewMutation>;
export type CreateReviewMutationOptions = Apollo.BaseMutationOptions<CreateReviewMutation, CreateReviewMutationVariables>;
export const DeleteReviewDocument = gql`
    mutation DeleteReview($id: Int!) {
  deleteReview(id: $id) {
    id
  }
}
    `;
export type DeleteReviewMutationFn = Apollo.MutationFunction<DeleteReviewMutation, DeleteReviewMutationVariables>;

/**
 * __useDeleteReviewMutation__
 *
 * To run a mutation, you first call `useDeleteReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteReviewMutation, { data, loading, error }] = useDeleteReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteReviewMutation, DeleteReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteReviewMutation, DeleteReviewMutationVariables>(DeleteReviewDocument, options);
      }
export type DeleteReviewMutationHookResult = ReturnType<typeof useDeleteReviewMutation>;
export type DeleteReviewMutationResult = Apollo.MutationResult<DeleteReviewMutation>;
export type DeleteReviewMutationOptions = Apollo.BaseMutationOptions<DeleteReviewMutation, DeleteReviewMutationVariables>;
export const ToggleReviewDocument = gql`
    mutation ToggleReview($id: Int!) {
  toggleReview(id: $id) {
    id
  }
}
    `;
export type ToggleReviewMutationFn = Apollo.MutationFunction<ToggleReviewMutation, ToggleReviewMutationVariables>;

/**
 * __useToggleReviewMutation__
 *
 * To run a mutation, you first call `useToggleReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleReviewMutation, { data, loading, error }] = useToggleReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleReviewMutation(baseOptions?: Apollo.MutationHookOptions<ToggleReviewMutation, ToggleReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleReviewMutation, ToggleReviewMutationVariables>(ToggleReviewDocument, options);
      }
export type ToggleReviewMutationHookResult = ReturnType<typeof useToggleReviewMutation>;
export type ToggleReviewMutationResult = Apollo.MutationResult<ToggleReviewMutation>;
export type ToggleReviewMutationOptions = Apollo.BaseMutationOptions<ToggleReviewMutation, ToggleReviewMutationVariables>;
export const UpdateReviewDocument = gql`
    mutation updateReview($id: Int!, $data: UpdateReviewInput!) {
  updateReview(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateReviewMutationFn = Apollo.MutationFunction<UpdateReviewMutation, UpdateReviewMutationVariables>;

/**
 * __useUpdateReviewMutation__
 *
 * To run a mutation, you first call `useUpdateReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateReviewMutation, { data, loading, error }] = useUpdateReviewMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateReviewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateReviewMutation, UpdateReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateReviewMutation, UpdateReviewMutationVariables>(UpdateReviewDocument, options);
      }
export type UpdateReviewMutationHookResult = ReturnType<typeof useUpdateReviewMutation>;
export type UpdateReviewMutationResult = Apollo.MutationResult<UpdateReviewMutation>;
export type UpdateReviewMutationOptions = Apollo.BaseMutationOptions<UpdateReviewMutation, UpdateReviewMutationVariables>;
export const CreateRubricDocument = gql`
    mutation CreateRubric {
  createRubric {
    id
  }
}
    `;
export type CreateRubricMutationFn = Apollo.MutationFunction<CreateRubricMutation, CreateRubricMutationVariables>;

/**
 * __useCreateRubricMutation__
 *
 * To run a mutation, you first call `useCreateRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createRubricMutation, { data, loading, error }] = useCreateRubricMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateRubricMutation(baseOptions?: Apollo.MutationHookOptions<CreateRubricMutation, CreateRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateRubricMutation, CreateRubricMutationVariables>(CreateRubricDocument, options);
      }
export type CreateRubricMutationHookResult = ReturnType<typeof useCreateRubricMutation>;
export type CreateRubricMutationResult = Apollo.MutationResult<CreateRubricMutation>;
export type CreateRubricMutationOptions = Apollo.BaseMutationOptions<CreateRubricMutation, CreateRubricMutationVariables>;
export const DeleteRubricDocument = gql`
    mutation DeleteRubric($id: Int!) {
  deleteRubric(id: $id) {
    id
  }
}
    `;
export type DeleteRubricMutationFn = Apollo.MutationFunction<DeleteRubricMutation, DeleteRubricMutationVariables>;

/**
 * __useDeleteRubricMutation__
 *
 * To run a mutation, you first call `useDeleteRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteRubricMutation, { data, loading, error }] = useDeleteRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteRubricMutation(baseOptions?: Apollo.MutationHookOptions<DeleteRubricMutation, DeleteRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteRubricMutation, DeleteRubricMutationVariables>(DeleteRubricDocument, options);
      }
export type DeleteRubricMutationHookResult = ReturnType<typeof useDeleteRubricMutation>;
export type DeleteRubricMutationResult = Apollo.MutationResult<DeleteRubricMutation>;
export type DeleteRubricMutationOptions = Apollo.BaseMutationOptions<DeleteRubricMutation, DeleteRubricMutationVariables>;
export const ToggleRubricDocument = gql`
    mutation ToggleRubric($id: Int!) {
  toggleRubric(id: $id) {
    id
  }
}
    `;
export type ToggleRubricMutationFn = Apollo.MutationFunction<ToggleRubricMutation, ToggleRubricMutationVariables>;

/**
 * __useToggleRubricMutation__
 *
 * To run a mutation, you first call `useToggleRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleRubricMutation, { data, loading, error }] = useToggleRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleRubricMutation(baseOptions?: Apollo.MutationHookOptions<ToggleRubricMutation, ToggleRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleRubricMutation, ToggleRubricMutationVariables>(ToggleRubricDocument, options);
      }
export type ToggleRubricMutationHookResult = ReturnType<typeof useToggleRubricMutation>;
export type ToggleRubricMutationResult = Apollo.MutationResult<ToggleRubricMutation>;
export type ToggleRubricMutationOptions = Apollo.BaseMutationOptions<ToggleRubricMutation, ToggleRubricMutationVariables>;
export const UpdateRubricDocument = gql`
    mutation updateRubric($id: Int!, $data: UpdateRubricInput!) {
  updateRubric(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateRubricMutationFn = Apollo.MutationFunction<UpdateRubricMutation, UpdateRubricMutationVariables>;

/**
 * __useUpdateRubricMutation__
 *
 * To run a mutation, you first call `useUpdateRubricMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRubricMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateRubricMutation, { data, loading, error }] = useUpdateRubricMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateRubricMutation(baseOptions?: Apollo.MutationHookOptions<UpdateRubricMutation, UpdateRubricMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateRubricMutation, UpdateRubricMutationVariables>(UpdateRubricDocument, options);
      }
export type UpdateRubricMutationHookResult = ReturnType<typeof useUpdateRubricMutation>;
export type UpdateRubricMutationResult = Apollo.MutationResult<UpdateRubricMutation>;
export type UpdateRubricMutationOptions = Apollo.BaseMutationOptions<UpdateRubricMutation, UpdateRubricMutationVariables>;
export const CreateServiceDocument = gql`
    mutation CreateService {
  createService {
    id
  }
}
    `;
export type CreateServiceMutationFn = Apollo.MutationFunction<CreateServiceMutation, CreateServiceMutationVariables>;

/**
 * __useCreateServiceMutation__
 *
 * To run a mutation, you first call `useCreateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createServiceMutation, { data, loading, error }] = useCreateServiceMutation({
 *   variables: {
 *   },
 * });
 */
export function useCreateServiceMutation(baseOptions?: Apollo.MutationHookOptions<CreateServiceMutation, CreateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateServiceMutation, CreateServiceMutationVariables>(CreateServiceDocument, options);
      }
export type CreateServiceMutationHookResult = ReturnType<typeof useCreateServiceMutation>;
export type CreateServiceMutationResult = Apollo.MutationResult<CreateServiceMutation>;
export type CreateServiceMutationOptions = Apollo.BaseMutationOptions<CreateServiceMutation, CreateServiceMutationVariables>;
export const DeleteServiceDocument = gql`
    mutation DeleteService($id: Int!) {
  deleteService(id: $id) {
    id
  }
}
    `;
export type DeleteServiceMutationFn = Apollo.MutationFunction<DeleteServiceMutation, DeleteServiceMutationVariables>;

/**
 * __useDeleteServiceMutation__
 *
 * To run a mutation, you first call `useDeleteServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteServiceMutation, { data, loading, error }] = useDeleteServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteServiceMutation(baseOptions?: Apollo.MutationHookOptions<DeleteServiceMutation, DeleteServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteServiceMutation, DeleteServiceMutationVariables>(DeleteServiceDocument, options);
      }
export type DeleteServiceMutationHookResult = ReturnType<typeof useDeleteServiceMutation>;
export type DeleteServiceMutationResult = Apollo.MutationResult<DeleteServiceMutation>;
export type DeleteServiceMutationOptions = Apollo.BaseMutationOptions<DeleteServiceMutation, DeleteServiceMutationVariables>;
export const ToggleServiceDocument = gql`
    mutation ToggleService($id: Int!) {
  toggleService(id: $id) {
    id
  }
}
    `;
export type ToggleServiceMutationFn = Apollo.MutationFunction<ToggleServiceMutation, ToggleServiceMutationVariables>;

/**
 * __useToggleServiceMutation__
 *
 * To run a mutation, you first call `useToggleServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useToggleServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [toggleServiceMutation, { data, loading, error }] = useToggleServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useToggleServiceMutation(baseOptions?: Apollo.MutationHookOptions<ToggleServiceMutation, ToggleServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ToggleServiceMutation, ToggleServiceMutationVariables>(ToggleServiceDocument, options);
      }
export type ToggleServiceMutationHookResult = ReturnType<typeof useToggleServiceMutation>;
export type ToggleServiceMutationResult = Apollo.MutationResult<ToggleServiceMutation>;
export type ToggleServiceMutationOptions = Apollo.BaseMutationOptions<ToggleServiceMutation, ToggleServiceMutationVariables>;
export const UpdateServiceDocument = gql`
    mutation updateService($id: Int!, $data: UpdateServiceInput!) {
  updateService(id: $id, data: $data) {
    id
  }
}
    `;
export type UpdateServiceMutationFn = Apollo.MutationFunction<UpdateServiceMutation, UpdateServiceMutationVariables>;

/**
 * __useUpdateServiceMutation__
 *
 * To run a mutation, you first call `useUpdateServiceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateServiceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateServiceMutation, { data, loading, error }] = useUpdateServiceMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateServiceMutation(baseOptions?: Apollo.MutationHookOptions<UpdateServiceMutation, UpdateServiceMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateServiceMutation, UpdateServiceMutationVariables>(UpdateServiceDocument, options);
      }
export type UpdateServiceMutationHookResult = ReturnType<typeof useUpdateServiceMutation>;
export type UpdateServiceMutationResult = Apollo.MutationResult<UpdateServiceMutation>;
export type UpdateServiceMutationOptions = Apollo.BaseMutationOptions<UpdateServiceMutation, UpdateServiceMutationVariables>;
export const CreateFolderDocument = gql`
    mutation CreateFolder($data: CreateFolderInput!) {
  createFolder(data: $data)
}
    `;
export type CreateFolderMutationFn = Apollo.MutationFunction<CreateFolderMutation, CreateFolderMutationVariables>;

/**
 * __useCreateFolderMutation__
 *
 * To run a mutation, you first call `useCreateFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFolderMutation, { data, loading, error }] = useCreateFolderMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateFolderMutation(baseOptions?: Apollo.MutationHookOptions<CreateFolderMutation, CreateFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFolderMutation, CreateFolderMutationVariables>(CreateFolderDocument, options);
      }
export type CreateFolderMutationHookResult = ReturnType<typeof useCreateFolderMutation>;
export type CreateFolderMutationResult = Apollo.MutationResult<CreateFolderMutation>;
export type CreateFolderMutationOptions = Apollo.BaseMutationOptions<CreateFolderMutation, CreateFolderMutationVariables>;
export const DeleteFileOrFolderDocument = gql`
    mutation DeleteFileOrFolder($path: String!) {
  deleteFileOrFolder(path: $path)
}
    `;
export type DeleteFileOrFolderMutationFn = Apollo.MutationFunction<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;

/**
 * __useDeleteFileOrFolderMutation__
 *
 * To run a mutation, you first call `useDeleteFileOrFolderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFileOrFolderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFileOrFolderMutation, { data, loading, error }] = useDeleteFileOrFolderMutation({
 *   variables: {
 *      path: // value for 'path'
 *   },
 * });
 */
export function useDeleteFileOrFolderMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>(DeleteFileOrFolderDocument, options);
      }
export type DeleteFileOrFolderMutationHookResult = ReturnType<typeof useDeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationResult = Apollo.MutationResult<DeleteFileOrFolderMutation>;
export type DeleteFileOrFolderMutationOptions = Apollo.BaseMutationOptions<DeleteFileOrFolderMutation, DeleteFileOrFolderMutationVariables>;
export const EditFileOrFolderNameDocument = gql`
    mutation EditFileOrFolderName($data: EditFileOrFolderNameInput!) {
  editFileOrFolderName(data: $data)
}
    `;
export type EditFileOrFolderNameMutationFn = Apollo.MutationFunction<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;

/**
 * __useEditFileOrFolderNameMutation__
 *
 * To run a mutation, you first call `useEditFileOrFolderNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditFileOrFolderNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editFileOrFolderNameMutation, { data, loading, error }] = useEditFileOrFolderNameMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useEditFileOrFolderNameMutation(baseOptions?: Apollo.MutationHookOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>(EditFileOrFolderNameDocument, options);
      }
export type EditFileOrFolderNameMutationHookResult = ReturnType<typeof useEditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationResult = Apollo.MutationResult<EditFileOrFolderNameMutation>;
export type EditFileOrFolderNameMutationOptions = Apollo.BaseMutationOptions<EditFileOrFolderNameMutation, EditFileOrFolderNameMutationVariables>;
export const UploadFilesDocument = gql`
    mutation UploadFiles($data: UploadFilesInput!) {
  uploadFiles(data: $data)
}
    `;
export type UploadFilesMutationFn = Apollo.MutationFunction<UploadFilesMutation, UploadFilesMutationVariables>;

/**
 * __useUploadFilesMutation__
 *
 * To run a mutation, you first call `useUploadFilesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadFilesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadFilesMutation, { data, loading, error }] = useUploadFilesMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUploadFilesMutation(baseOptions?: Apollo.MutationHookOptions<UploadFilesMutation, UploadFilesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadFilesMutation, UploadFilesMutationVariables>(UploadFilesDocument, options);
      }
export type UploadFilesMutationHookResult = ReturnType<typeof useUploadFilesMutation>;
export type UploadFilesMutationResult = Apollo.MutationResult<UploadFilesMutation>;
export type UploadFilesMutationOptions = Apollo.BaseMutationOptions<UploadFilesMutation, UploadFilesMutationVariables>;
export const AdvantageByIdDocument = gql`
    query AdvantageById($id: Int!) {
  advantageById(id: $id) {
    name
    description
    imagePath
  }
}
    `;

/**
 * __useAdvantageByIdQuery__
 *
 * To run a query within a React component, call `useAdvantageByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvantageByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvantageByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAdvantageByIdQuery(baseOptions: Apollo.QueryHookOptions<AdvantageByIdQuery, AdvantageByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvantageByIdQuery, AdvantageByIdQueryVariables>(AdvantageByIdDocument, options);
      }
export function useAdvantageByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvantageByIdQuery, AdvantageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvantageByIdQuery, AdvantageByIdQueryVariables>(AdvantageByIdDocument, options);
        }
export function useAdvantageByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvantageByIdQuery, AdvantageByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvantageByIdQuery, AdvantageByIdQueryVariables>(AdvantageByIdDocument, options);
        }
export type AdvantageByIdQueryHookResult = ReturnType<typeof useAdvantageByIdQuery>;
export type AdvantageByIdLazyQueryHookResult = ReturnType<typeof useAdvantageByIdLazyQuery>;
export type AdvantageByIdSuspenseQueryHookResult = ReturnType<typeof useAdvantageByIdSuspenseQuery>;
export type AdvantageByIdQueryResult = Apollo.QueryResult<AdvantageByIdQuery, AdvantageByIdQueryVariables>;
export const AdvantagesDocument = gql`
    query Advantages($query: QueryInput!) {
  advantages(query: $query) {
    id
    name
    description
    imagePath
    status
    createdAt
  }
}
    `;

/**
 * __useAdvantagesQuery__
 *
 * To run a query within a React component, call `useAdvantagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdvantagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdvantagesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useAdvantagesQuery(baseOptions: Apollo.QueryHookOptions<AdvantagesQuery, AdvantagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdvantagesQuery, AdvantagesQueryVariables>(AdvantagesDocument, options);
      }
export function useAdvantagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdvantagesQuery, AdvantagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdvantagesQuery, AdvantagesQueryVariables>(AdvantagesDocument, options);
        }
export function useAdvantagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<AdvantagesQuery, AdvantagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<AdvantagesQuery, AdvantagesQueryVariables>(AdvantagesDocument, options);
        }
export type AdvantagesQueryHookResult = ReturnType<typeof useAdvantagesQuery>;
export type AdvantagesLazyQueryHookResult = ReturnType<typeof useAdvantagesLazyQuery>;
export type AdvantagesSuspenseQueryHookResult = ReturnType<typeof useAdvantagesSuspenseQuery>;
export type AdvantagesQueryResult = Apollo.QueryResult<AdvantagesQuery, AdvantagesQueryVariables>;
export const CategoriesDocument = gql`
    query Categories($query: QueryInput!) {
  categories(query: $query) {
    id
    name
    slug
    imagePath
    backgroundColor
    priceFrom
    status
    createdAt
  }
}
    `;

/**
 * __useCategoriesQuery__
 *
 * To run a query within a React component, call `useCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
      }
export function useCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export function useCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesQuery, CategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesQuery, CategoriesQueryVariables>(CategoriesDocument, options);
        }
export type CategoriesQueryHookResult = ReturnType<typeof useCategoriesQuery>;
export type CategoriesLazyQueryHookResult = ReturnType<typeof useCategoriesLazyQuery>;
export type CategoriesSuspenseQueryHookResult = ReturnType<typeof useCategoriesSuspenseQuery>;
export type CategoriesQueryResult = Apollo.QueryResult<CategoriesQuery, CategoriesQueryVariables>;
export const CalculatorCategoriesDocument = gql`
    query CalculatorCategories($query: QueryInput!) {
  categories(query: $query) {
    slug
    name
  }
}
    `;

/**
 * __useCalculatorCategoriesQuery__
 *
 * To run a query within a React component, call `useCalculatorCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculatorCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculatorCategoriesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCalculatorCategoriesQuery(baseOptions: Apollo.QueryHookOptions<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>(CalculatorCategoriesDocument, options);
      }
export function useCalculatorCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>(CalculatorCategoriesDocument, options);
        }
export function useCalculatorCategoriesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>(CalculatorCategoriesDocument, options);
        }
export type CalculatorCategoriesQueryHookResult = ReturnType<typeof useCalculatorCategoriesQuery>;
export type CalculatorCategoriesLazyQueryHookResult = ReturnType<typeof useCalculatorCategoriesLazyQuery>;
export type CalculatorCategoriesSuspenseQueryHookResult = ReturnType<typeof useCalculatorCategoriesSuspenseQuery>;
export type CalculatorCategoriesQueryResult = Apollo.QueryResult<CalculatorCategoriesQuery, CalculatorCategoriesQueryVariables>;
export const CategoriesCatalogDocument = gql`
    query CategoriesCatalog($query: QueryInput!) {
  categories(query: $query) {
    id
    name
    slug
    imagePath
    backgroundColor
    priceFrom
    groups {
      id
      name
      imagePath
      services {
        id
        name
        description
        term
        imagePath
        price
      }
    }
    status
    createdAt
  }
}
    `;

/**
 * __useCategoriesCatalogQuery__
 *
 * To run a query within a React component, call `useCategoriesCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoriesCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoriesCatalogQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCategoriesCatalogQuery(baseOptions: Apollo.QueryHookOptions<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>(CategoriesCatalogDocument, options);
      }
export function useCategoriesCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>(CategoriesCatalogDocument, options);
        }
export function useCategoriesCatalogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>(CategoriesCatalogDocument, options);
        }
export type CategoriesCatalogQueryHookResult = ReturnType<typeof useCategoriesCatalogQuery>;
export type CategoriesCatalogLazyQueryHookResult = ReturnType<typeof useCategoriesCatalogLazyQuery>;
export type CategoriesCatalogSuspenseQueryHookResult = ReturnType<typeof useCategoriesCatalogSuspenseQuery>;
export type CategoriesCatalogQueryResult = Apollo.QueryResult<CategoriesCatalogQuery, CategoriesCatalogQueryVariables>;
export const CategoryByIdDocument = gql`
    query CategoryById($id: Int!) {
  categoryById(id: $id) {
    name
    imagePath
    backgroundColor
    priceFrom
    rubrics {
      id
      name
    }
  }
}
    `;

/**
 * __useCategoryByIdQuery__
 *
 * To run a query within a React component, call `useCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
      }
export function useCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export function useCategoryByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryByIdQuery, CategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryByIdQuery, CategoryByIdQueryVariables>(CategoryByIdDocument, options);
        }
export type CategoryByIdQueryHookResult = ReturnType<typeof useCategoryByIdQuery>;
export type CategoryByIdLazyQueryHookResult = ReturnType<typeof useCategoryByIdLazyQuery>;
export type CategoryByIdSuspenseQueryHookResult = ReturnType<typeof useCategoryByIdSuspenseQuery>;
export type CategoryByIdQueryResult = Apollo.QueryResult<CategoryByIdQuery, CategoryByIdQueryVariables>;
export const CategoryBySlugDocument = gql`
    query CategoryBySlug($slug: String!) {
  categoryBySlug(slug: $slug) {
    priceFrom
  }
}
    `;

/**
 * __useCategoryBySlugQuery__
 *
 * To run a query within a React component, call `useCategoryBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useCategoryBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCategoryBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useCategoryBySlugQuery(baseOptions: Apollo.QueryHookOptions<CategoryBySlugQuery, CategoryBySlugQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CategoryBySlugQuery, CategoryBySlugQueryVariables>(CategoryBySlugDocument, options);
      }
export function useCategoryBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CategoryBySlugQuery, CategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CategoryBySlugQuery, CategoryBySlugQueryVariables>(CategoryBySlugDocument, options);
        }
export function useCategoryBySlugSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CategoryBySlugQuery, CategoryBySlugQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CategoryBySlugQuery, CategoryBySlugQueryVariables>(CategoryBySlugDocument, options);
        }
export type CategoryBySlugQueryHookResult = ReturnType<typeof useCategoryBySlugQuery>;
export type CategoryBySlugLazyQueryHookResult = ReturnType<typeof useCategoryBySlugLazyQuery>;
export type CategoryBySlugSuspenseQueryHookResult = ReturnType<typeof useCategoryBySlugSuspenseQuery>;
export type CategoryBySlugQueryResult = Apollo.QueryResult<CategoryBySlugQuery, CategoryBySlugQueryVariables>;
export const GroupByIdDocument = gql`
    query GroupById($id: Int!) {
  groupById(id: $id) {
    name
    imagePath
    categories {
      id
      name
    }
  }
}
    `;

/**
 * __useGroupByIdQuery__
 *
 * To run a query within a React component, call `useGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGroupByIdQuery(baseOptions: Apollo.QueryHookOptions<GroupByIdQuery, GroupByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupByIdQuery, GroupByIdQueryVariables>(GroupByIdDocument, options);
      }
export function useGroupByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupByIdQuery, GroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupByIdQuery, GroupByIdQueryVariables>(GroupByIdDocument, options);
        }
export function useGroupByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GroupByIdQuery, GroupByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GroupByIdQuery, GroupByIdQueryVariables>(GroupByIdDocument, options);
        }
export type GroupByIdQueryHookResult = ReturnType<typeof useGroupByIdQuery>;
export type GroupByIdLazyQueryHookResult = ReturnType<typeof useGroupByIdLazyQuery>;
export type GroupByIdSuspenseQueryHookResult = ReturnType<typeof useGroupByIdSuspenseQuery>;
export type GroupByIdQueryResult = Apollo.QueryResult<GroupByIdQuery, GroupByIdQueryVariables>;
export const GroupsDocument = gql`
    query Groups($query: QueryGroupInput!) {
  groups(query: $query) {
    id
    name
    slug
    imagePath
    status
    createdAt
  }
}
    `;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGroupsQuery(baseOptions: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
      }
export function useGroupsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
        }
export function useGroupsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
        }
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsSuspenseQueryHookResult = ReturnType<typeof useGroupsSuspenseQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const OfferByIdDocument = gql`
    query OfferById($id: Int!) {
  offerById(id: $id) {
    sale
    description
    imagePath
    color
    backgroundColor
  }
}
    `;

/**
 * __useOfferByIdQuery__
 *
 * To run a query within a React component, call `useOfferByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOfferByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOfferByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOfferByIdQuery(baseOptions: Apollo.QueryHookOptions<OfferByIdQuery, OfferByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OfferByIdQuery, OfferByIdQueryVariables>(OfferByIdDocument, options);
      }
export function useOfferByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OfferByIdQuery, OfferByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OfferByIdQuery, OfferByIdQueryVariables>(OfferByIdDocument, options);
        }
export function useOfferByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OfferByIdQuery, OfferByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OfferByIdQuery, OfferByIdQueryVariables>(OfferByIdDocument, options);
        }
export type OfferByIdQueryHookResult = ReturnType<typeof useOfferByIdQuery>;
export type OfferByIdLazyQueryHookResult = ReturnType<typeof useOfferByIdLazyQuery>;
export type OfferByIdSuspenseQueryHookResult = ReturnType<typeof useOfferByIdSuspenseQuery>;
export type OfferByIdQueryResult = Apollo.QueryResult<OfferByIdQuery, OfferByIdQueryVariables>;
export const OffersDocument = gql`
    query Offers($query: QueryInput!) {
  offers(query: $query) {
    id
    sale
    about
    description
    imagePath
    backgroundColor
    color
    status
    createdAt
  }
}
    `;

/**
 * __useOffersQuery__
 *
 * To run a query within a React component, call `useOffersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOffersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOffersQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useOffersQuery(baseOptions: Apollo.QueryHookOptions<OffersQuery, OffersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
      }
export function useOffersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OffersQuery, OffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
        }
export function useOffersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OffersQuery, OffersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OffersQuery, OffersQueryVariables>(OffersDocument, options);
        }
export type OffersQueryHookResult = ReturnType<typeof useOffersQuery>;
export type OffersLazyQueryHookResult = ReturnType<typeof useOffersLazyQuery>;
export type OffersSuspenseQueryHookResult = ReturnType<typeof useOffersSuspenseQuery>;
export type OffersQueryResult = Apollo.QueryResult<OffersQuery, OffersQueryVariables>;
export const OrderByIdDocument = gql`
    query OrderById($id: Int!) {
  orderById(id: $id) {
    id
    name
    phone
    total
    items {
      quantity
      service {
        id
        name
        slug
        term
        description
        price
        imagePath
      }
    }
    createdAt
  }
}
    `;

/**
 * __useOrderByIdQuery__
 *
 * To run a query within a React component, call `useOrderByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrderByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrderByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useOrderByIdQuery(baseOptions: Apollo.QueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
      }
export function useOrderByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
        }
export function useOrderByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrderByIdQuery, OrderByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrderByIdQuery, OrderByIdQueryVariables>(OrderByIdDocument, options);
        }
export type OrderByIdQueryHookResult = ReturnType<typeof useOrderByIdQuery>;
export type OrderByIdLazyQueryHookResult = ReturnType<typeof useOrderByIdLazyQuery>;
export type OrderByIdSuspenseQueryHookResult = ReturnType<typeof useOrderByIdSuspenseQuery>;
export type OrderByIdQueryResult = Apollo.QueryResult<OrderByIdQuery, OrderByIdQueryVariables>;
export const OrdersDocument = gql`
    query Orders($query: QueryOrderInput!) {
  orders(query: $query) {
    id
    orderStatus
    total
    name
    phone
    items {
      quantity
    }
    createdAt
  }
}
    `;

/**
 * __useOrdersQuery__
 *
 * To run a query within a React component, call `useOrdersQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrdersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrdersQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useOrdersQuery(baseOptions: Apollo.QueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
      }
export function useOrdersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export function useOrdersSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<OrdersQuery, OrdersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<OrdersQuery, OrdersQueryVariables>(OrdersDocument, options);
        }
export type OrdersQueryHookResult = ReturnType<typeof useOrdersQuery>;
export type OrdersLazyQueryHookResult = ReturnType<typeof useOrdersLazyQuery>;
export type OrdersSuspenseQueryHookResult = ReturnType<typeof useOrdersSuspenseQuery>;
export type OrdersQueryResult = Apollo.QueryResult<OrdersQuery, OrdersQueryVariables>;
export const RequestByIdDocument = gql`
    query RequestById($id: Int!) {
  requestById(id: $id) {
    id
    name
    phone
    name
    type
    createdAt
  }
}
    `;

/**
 * __useRequestByIdQuery__
 *
 * To run a query within a React component, call `useRequestByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequestByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRequestByIdQuery(baseOptions: Apollo.QueryHookOptions<RequestByIdQuery, RequestByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RequestByIdQuery, RequestByIdQueryVariables>(RequestByIdDocument, options);
      }
export function useRequestByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RequestByIdQuery, RequestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RequestByIdQuery, RequestByIdQueryVariables>(RequestByIdDocument, options);
        }
export function useRequestByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RequestByIdQuery, RequestByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RequestByIdQuery, RequestByIdQueryVariables>(RequestByIdDocument, options);
        }
export type RequestByIdQueryHookResult = ReturnType<typeof useRequestByIdQuery>;
export type RequestByIdLazyQueryHookResult = ReturnType<typeof useRequestByIdLazyQuery>;
export type RequestByIdSuspenseQueryHookResult = ReturnType<typeof useRequestByIdSuspenseQuery>;
export type RequestByIdQueryResult = Apollo.QueryResult<RequestByIdQuery, RequestByIdQueryVariables>;
export const RequestsDocument = gql`
    query Requests($query: QueryRequestInput!) {
  requests(query: $query) {
    id
    name
    phone
    type
    createdAt
  }
}
    `;

/**
 * __useRequestsQuery__
 *
 * To run a query within a React component, call `useRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRequestsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useRequestsQuery(baseOptions: Apollo.QueryHookOptions<RequestsQuery, RequestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RequestsQuery, RequestsQueryVariables>(RequestsDocument, options);
      }
export function useRequestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RequestsQuery, RequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RequestsQuery, RequestsQueryVariables>(RequestsDocument, options);
        }
export function useRequestsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RequestsQuery, RequestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RequestsQuery, RequestsQueryVariables>(RequestsDocument, options);
        }
export type RequestsQueryHookResult = ReturnType<typeof useRequestsQuery>;
export type RequestsLazyQueryHookResult = ReturnType<typeof useRequestsLazyQuery>;
export type RequestsSuspenseQueryHookResult = ReturnType<typeof useRequestsSuspenseQuery>;
export type RequestsQueryResult = Apollo.QueryResult<RequestsQuery, RequestsQueryVariables>;
export const ReviewByIdDocument = gql`
    query ReviewById($id: Int!) {
  reviewById(id: $id) {
    author
    authorAvatar
    rating
    review
    date
  }
}
    `;

/**
 * __useReviewByIdQuery__
 *
 * To run a query within a React component, call `useReviewByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useReviewByIdQuery(baseOptions: Apollo.QueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
      }
export function useReviewByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
        }
export function useReviewByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewByIdQuery, ReviewByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewByIdQuery, ReviewByIdQueryVariables>(ReviewByIdDocument, options);
        }
export type ReviewByIdQueryHookResult = ReturnType<typeof useReviewByIdQuery>;
export type ReviewByIdLazyQueryHookResult = ReturnType<typeof useReviewByIdLazyQuery>;
export type ReviewByIdSuspenseQueryHookResult = ReturnType<typeof useReviewByIdSuspenseQuery>;
export type ReviewByIdQueryResult = Apollo.QueryResult<ReviewByIdQuery, ReviewByIdQueryVariables>;
export const ReviewsDocument = gql`
    query Reviews($query: QueryInput!) {
  reviews(query: $query) {
    id
    author
    authorAvatar
    rating
    review
    date
    status
    createdAt
  }
}
    `;

/**
 * __useReviewsQuery__
 *
 * To run a query within a React component, call `useReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useReviewsQuery(baseOptions: Apollo.QueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
      }
export function useReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export function useReviewsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ReviewsQuery, ReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ReviewsQuery, ReviewsQueryVariables>(ReviewsDocument, options);
        }
export type ReviewsQueryHookResult = ReturnType<typeof useReviewsQuery>;
export type ReviewsLazyQueryHookResult = ReturnType<typeof useReviewsLazyQuery>;
export type ReviewsSuspenseQueryHookResult = ReturnType<typeof useReviewsSuspenseQuery>;
export type ReviewsQueryResult = Apollo.QueryResult<ReviewsQuery, ReviewsQueryVariables>;
export const RubricByIdDocument = gql`
    query RubricById($id: Int!) {
  rubricById(id: $id) {
    name
    imagePath
  }
}
    `;

/**
 * __useRubricByIdQuery__
 *
 * To run a query within a React component, call `useRubricByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useRubricByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRubricByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRubricByIdQuery(baseOptions: Apollo.QueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
      }
export function useRubricByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
        }
export function useRubricByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RubricByIdQuery, RubricByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RubricByIdQuery, RubricByIdQueryVariables>(RubricByIdDocument, options);
        }
export type RubricByIdQueryHookResult = ReturnType<typeof useRubricByIdQuery>;
export type RubricByIdLazyQueryHookResult = ReturnType<typeof useRubricByIdLazyQuery>;
export type RubricByIdSuspenseQueryHookResult = ReturnType<typeof useRubricByIdSuspenseQuery>;
export type RubricByIdQueryResult = Apollo.QueryResult<RubricByIdQuery, RubricByIdQueryVariables>;
export const CalculatorRubricsDocument = gql`
    query CalculatorRubrics($query: QueryInput!) {
  rubrics(query: $query) {
    slug
    name
  }
}
    `;

/**
 * __useCalculatorRubricsQuery__
 *
 * To run a query within a React component, call `useCalculatorRubricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCalculatorRubricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCalculatorRubricsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useCalculatorRubricsQuery(baseOptions: Apollo.QueryHookOptions<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>(CalculatorRubricsDocument, options);
      }
export function useCalculatorRubricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>(CalculatorRubricsDocument, options);
        }
export function useCalculatorRubricsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>(CalculatorRubricsDocument, options);
        }
export type CalculatorRubricsQueryHookResult = ReturnType<typeof useCalculatorRubricsQuery>;
export type CalculatorRubricsLazyQueryHookResult = ReturnType<typeof useCalculatorRubricsLazyQuery>;
export type CalculatorRubricsSuspenseQueryHookResult = ReturnType<typeof useCalculatorRubricsSuspenseQuery>;
export type CalculatorRubricsQueryResult = Apollo.QueryResult<CalculatorRubricsQuery, CalculatorRubricsQueryVariables>;
export const RubricsCatalogDocument = gql`
    query RubricsCatalog($query: QueryInput!, $type: String) {
  rubrics(query: $query, type: $type) {
    id
    name
    slug
    imagePath
    categories {
      id
      name
      slug
      imagePath
      backgroundColor
      priceFrom
      groups {
        id
        name
        imagePath
        services {
          id
          name
          description
          term
          imagePath
          price
        }
      }
    }
    status
    createdAt
  }
}
    `;

/**
 * __useRubricsCatalogQuery__
 *
 * To run a query within a React component, call `useRubricsCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useRubricsCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRubricsCatalogQuery({
 *   variables: {
 *      query: // value for 'query'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useRubricsCatalogQuery(baseOptions: Apollo.QueryHookOptions<RubricsCatalogQuery, RubricsCatalogQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RubricsCatalogQuery, RubricsCatalogQueryVariables>(RubricsCatalogDocument, options);
      }
export function useRubricsCatalogLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RubricsCatalogQuery, RubricsCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RubricsCatalogQuery, RubricsCatalogQueryVariables>(RubricsCatalogDocument, options);
        }
export function useRubricsCatalogSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RubricsCatalogQuery, RubricsCatalogQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RubricsCatalogQuery, RubricsCatalogQueryVariables>(RubricsCatalogDocument, options);
        }
export type RubricsCatalogQueryHookResult = ReturnType<typeof useRubricsCatalogQuery>;
export type RubricsCatalogLazyQueryHookResult = ReturnType<typeof useRubricsCatalogLazyQuery>;
export type RubricsCatalogSuspenseQueryHookResult = ReturnType<typeof useRubricsCatalogSuspenseQuery>;
export type RubricsCatalogQueryResult = Apollo.QueryResult<RubricsCatalogQuery, RubricsCatalogQueryVariables>;
export const RubricsDocument = gql`
    query Rubrics($query: QueryInput!) {
  rubrics(query: $query) {
    id
    name
    slug
    imagePath
    status
    createdAt
  }
}
    `;

/**
 * __useRubricsQuery__
 *
 * To run a query within a React component, call `useRubricsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRubricsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRubricsQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useRubricsQuery(baseOptions: Apollo.QueryHookOptions<RubricsQuery, RubricsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
      }
export function useRubricsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RubricsQuery, RubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
        }
export function useRubricsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<RubricsQuery, RubricsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<RubricsQuery, RubricsQueryVariables>(RubricsDocument, options);
        }
export type RubricsQueryHookResult = ReturnType<typeof useRubricsQuery>;
export type RubricsLazyQueryHookResult = ReturnType<typeof useRubricsLazyQuery>;
export type RubricsSuspenseQueryHookResult = ReturnType<typeof useRubricsSuspenseQuery>;
export type RubricsQueryResult = Apollo.QueryResult<RubricsQuery, RubricsQueryVariables>;
export const ServiceByIdDocument = gql`
    query ServiceById($id: Int!) {
  serviceById(id: $id) {
    name
    description
    imagePath
    price
    term
    groups {
      id
      name
    }
  }
}
    `;

/**
 * __useServiceByIdQuery__
 *
 * To run a query within a React component, call `useServiceByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useServiceByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServiceByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useServiceByIdQuery(baseOptions: Apollo.QueryHookOptions<ServiceByIdQuery, ServiceByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServiceByIdQuery, ServiceByIdQueryVariables>(ServiceByIdDocument, options);
      }
export function useServiceByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServiceByIdQuery, ServiceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServiceByIdQuery, ServiceByIdQueryVariables>(ServiceByIdDocument, options);
        }
export function useServiceByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ServiceByIdQuery, ServiceByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ServiceByIdQuery, ServiceByIdQueryVariables>(ServiceByIdDocument, options);
        }
export type ServiceByIdQueryHookResult = ReturnType<typeof useServiceByIdQuery>;
export type ServiceByIdLazyQueryHookResult = ReturnType<typeof useServiceByIdLazyQuery>;
export type ServiceByIdSuspenseQueryHookResult = ReturnType<typeof useServiceByIdSuspenseQuery>;
export type ServiceByIdQueryResult = Apollo.QueryResult<ServiceByIdQuery, ServiceByIdQueryVariables>;
export const ServicesDocument = gql`
    query Services($query: QueryInput!) {
  services(query: $query) {
    id
    name
    slug
    description
    price
    imagePath
    status
    createdAt
  }
}
    `;

/**
 * __useServicesQuery__
 *
 * To run a query within a React component, call `useServicesQuery` and pass it any options that fit your needs.
 * When your component renders, `useServicesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useServicesQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useServicesQuery(baseOptions: Apollo.QueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
      }
export function useServicesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
        }
export function useServicesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ServicesQuery, ServicesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ServicesQuery, ServicesQueryVariables>(ServicesDocument, options);
        }
export type ServicesQueryHookResult = ReturnType<typeof useServicesQuery>;
export type ServicesLazyQueryHookResult = ReturnType<typeof useServicesLazyQuery>;
export type ServicesSuspenseQueryHookResult = ReturnType<typeof useServicesSuspenseQuery>;
export type ServicesQueryResult = Apollo.QueryResult<ServicesQuery, ServicesQueryVariables>;
export const GetFolderItemsDocument = gql`
    query GetFolderItems($folderPath: String!) {
  folderItems(folderPath: $folderPath) {
    folders {
      name
      size
      count
      path
      createdAt
    }
    files {
      name
      size
      extension
      path
      createdAt
    }
  }
}
    `;

/**
 * __useGetFolderItemsQuery__
 *
 * To run a query within a React component, call `useGetFolderItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFolderItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFolderItemsQuery({
 *   variables: {
 *      folderPath: // value for 'folderPath'
 *   },
 * });
 */
export function useGetFolderItemsQuery(baseOptions: Apollo.QueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
      }
export function useGetFolderItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export function useGetFolderItemsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetFolderItemsQuery, GetFolderItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFolderItemsQuery, GetFolderItemsQueryVariables>(GetFolderItemsDocument, options);
        }
export type GetFolderItemsQueryHookResult = ReturnType<typeof useGetFolderItemsQuery>;
export type GetFolderItemsLazyQueryHookResult = ReturnType<typeof useGetFolderItemsLazyQuery>;
export type GetFolderItemsSuspenseQueryHookResult = ReturnType<typeof useGetFolderItemsSuspenseQuery>;
export type GetFolderItemsQueryResult = Apollo.QueryResult<GetFolderItemsQuery, GetFolderItemsQueryVariables>;
export const ProfileDocument = gql`
    query Profile {
  profile {
    login
    email
    avatarPath
    role
  }
}
    `;

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: Apollo.QueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
      }
export function useProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export function useProfileSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<ProfileQuery, ProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<ProfileQuery, ProfileQueryVariables>(ProfileDocument, options);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileSuspenseQueryHookResult = ReturnType<typeof useProfileSuspenseQuery>;
export type ProfileQueryResult = Apollo.QueryResult<ProfileQuery, ProfileQueryVariables>;