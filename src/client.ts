import path from "path";
import { loadPackageDefinition as loadGRPCPackageDefinition, ChannelCredentials as GRPCChannelCredentials, ServiceClientConstructor, Client } from "@grpc/grpc-js";
import { loadSync as grpcLoadSync, PackageDefinition } from "@grpc/proto-loader";

const packageDefinition: PackageDefinition = grpcLoadSync(
    path.resolve(__dirname, 'Contracts', 'oca.proto'),
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
);


const proto = loadGRPCPackageDefinition(packageDefinition) as {
    OCASync: ServiceClientConstructor;
};

const ocaSyncClient: Client = new proto.OCASync('127.0.0.1:3334', GRPCChannelCredentials.createInsecure());

export default ocaSyncClient;